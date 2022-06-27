"use strict";
exports.__esModule = true;
exports.User = exports.quantitySup = exports.CHOICE = void 0;
var CHOICE;
(function (CHOICE) {
    CHOICE["Up"] = "Priority";
    CHOICE["Down"] = "Unwanted";
})(CHOICE = exports.CHOICE || (exports.CHOICE = {}));
function quantitySup(pastrie) {
    for (var i = 0; i < pastrie.length; i++) {
        if (pastrie[i].quantity > 5) {
            pastrie[i].check = true;
        }
        else {
            pastrie[i].check = false;
        }
    }
}
exports.quantitySup = quantitySup;
var User = /** @class */ (function () {
    function User(name, email, password, id) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id;
    }
    return User;
}());
exports.User = User;
