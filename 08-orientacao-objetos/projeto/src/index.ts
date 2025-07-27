import { Car } from "./Car";
import { Bike } from "./Bike";

const myCar = new Car("Toyota", "Corolla", 180, 4);
const myBike = new Bike("Trek", "Domane", 30, true);

myCar.move();
myCar.openDoors();

myBike.move();
myBike.ringBell();
