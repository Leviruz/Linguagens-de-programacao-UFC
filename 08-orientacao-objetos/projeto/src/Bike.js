"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
const Vehicle_1 = require("./Vehicle");
class Bike extends Vehicle_1.Vehicle {
    constructor(brand, model, speed, hasBell) {
        super(brand, model, speed);
        this.hasBell = hasBell;
    }
    ringBell() {
        if (this.hasBell) {
            console.log("Tocando o sino");
        }
        else {
            console.log("Bike sem sino. :(");
        }
    }
}
exports.Bike = Bike;
