// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class extends the Vehicle class and implements the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // TODO: Declare properties of the Truck class
  // Properties are declared with their types
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;  
  // Constructor accepts the properties of the Truck class
constructor(
  vin: string,
  color: string,
  make: string,
  model: string,
  year: number,
  weight: number,
  topSpeed: number,
  wheels: Wheel[],
  towingCapacity: number
) {
  // Allows the constructor to call the constructor of the parent class, Vehicle
  super ()

   // Initializes the properties of the Truck class
  this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

// Allows constructor to check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
}
  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): boolean {
    // TODO: Get the make an model of the vehicle if it exists
    const {make, model} = vehicle;
    // Check if the vehicle's weight is less than or equal to the truck's towing capacity and log the appropriate message
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`The ${make} ${model} is being towed.`);
      return true;
    } else {
      console.log(`The ${make} ${model} is too heavy to be towed.`);
      return false;
    }
  }

  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void{
    // Call the printDetails method of the parent class
    super.printDetails();
    // Log the details of the Truck
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    console.log(`Wheels: ${this.wheels.length}`);
  }

}

// Export the Truck class as the default export
export default Truck;
