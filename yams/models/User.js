import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserShema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String
    }
});

const UserModel = mongoose.model('users', UserShema);

export default UserModel;