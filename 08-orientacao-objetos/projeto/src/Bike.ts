import { Vehicle } from "./Vehicle";

export class Bike extends Vehicle {
  constructor(
    brand: string,
    model: string,
    speed: number,
    public hasBell: boolean
  ) {
    super(brand, model, speed);
  }

  ringBell() {
    if (this.hasBell) {
      console.log("Tocando o sino");
    } else {
      console.log("Bike sem sino. :(");
    }
  }
}
