// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // Declares the properties of the Motorbike class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  // TODO: Create a constructor that accepts the properties of the Motorbike class
    // TODO: The constructor should initialize the properties of the Motorbike class
    constructor(
      vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      topSpeed: number,
      wheels: Wheel[],
    ) {
      // Allows the constructor to call the constructor of the parent class, Vehicle
      super();
   // Initializes the properties of the Motorbike class
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.topSpeed = topSpeed;
// Constructor checks if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
      if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
      } else {
      this.wheels = wheels;
       }
    }

  // Implements the wheelie method
    // The method logs the message "Motorbike [make] [model] is doing a wheelie!" when called
    wheelie(): void {
      console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }

    // TODO: Override the printDetails method from the Vehicle class
    override printDetails(): void {
      // Call the printDetails method of the parent class
      super.printDetails();
  // The method will log the details of the Motorbike
      console.log(`VIN: ${this.vin}`)
      console.log(`Color: ${this.color}`)
      console.log(`Make: ${this.make}`)
      console.log(`Model: ${this.model}`)
      console.log(`Year: ${this.year}`)
      console.log(`Weight: ${this.weight} lbs`)
      console.log(`Top Speed: ${this.topSpeed} mph`)
      console.log(`Wheels: ${this.wheels.length}`)
    }
}
// Export the Motorbike class as the default export
export default Motorbike;
