import express from "express";
const router = express.Router();
import { PastrieModel } from "../models/Pastrie.js";

router.get("/pastries", async (req, res) => {
    try {
        const pastries = await PastrieModel.find({}, { ingredients: 0, __v: 0 });

        res.json(pastries);
    } catch (err) {
        res.json({ error: "no dataset" });
    }
});

router.get("/ingredient/:id", async (req, res) => {
    try {
        const id = req.params.id;
        // find({}, {}) == WHERE + RESTRICTION, on passe par le modèle pour faire la requête
        const ingredients = await PastrieModel.findOne({_id : id}, { ingredients: 1 });
        console.log(ingredients)
        res.json(ingredients);
    } catch (err) {
        res.json({ error: "no dataset" });
    }
});

router.get("/pastrie/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const pastrie = await PastrieModel.findOne({ _id: id }, { ingredients: 0 });

        res.json(pastrie);
    } catch (err) {
        res.json({ error: "no dataset" });
    }
});

router.put("/pastrie/:choice", async (req, res) => {
    const choice = req.params.choice;
    const id = req.body._id; // pastrie <=> body
    const pastrie = await PastrieModel.updateOne({_id: id}, { choice: choice });

    res.json(pastrie);
});


export default router;
