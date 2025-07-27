"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    constructor(brand, model, speed) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }
    move() {
        console.log(`${this.brand} ${this.model} Tá se movendo a uma velocidade de: ${this.speed} km/h`);
    }
}
exports.Vehicle = Vehicle;
