import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
  constructor(
    brand: string,
    model: string,
    speed: number,
    public doors: number
  ) {
    super(brand, model, speed);
  }

  openDoors() {
    console.log(`Abrindo ${this.doors} portas`);
  }
}
