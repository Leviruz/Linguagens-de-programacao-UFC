"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const Vehicle_1 = require("./Vehicle");
class Car extends Vehicle_1.Vehicle {
    constructor(brand, model, speed, doors) {
        super(brand, model, speed);
        this.doors = doors;
    }
    openDoors() {
        console.log(`Abrindo ${this.doors} portas`);
    }
}
exports.Car = Car;
