export class Vehicle {
  constructor(
    public brand: string,
    public model: string,
    public speed: number
  ) {}

  move() {
    console.log(
      `${this.brand} ${this.model} Tá se movendo a uma velocidade de: ${this.speed} km/h`
    );
  }
}
