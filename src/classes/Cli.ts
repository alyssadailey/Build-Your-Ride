// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

// define the Cli class
class Cli {
  // using the union opperator, the vehicles property accepts Car, Truck and Motorbike objects, selectedVehicleVin is a string or undefined, and exit is a boolean
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  //  The constructor accepts Car, Truck and Motorbike objects as well
  constructor(vehicles: (Car | Truck | Motorbike)[]) {

    this.vehicles = vehicles;
  }

  // static method to generate a vin
  static generateVin(): string {
    // return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  // method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        // sets the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // performs actions on the selected vehicle
        this.performActions();
      });
  }

  // method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          //Updated the choices array to include Car, Truck and Motorbike
          choices: ['Car', 'Truck', 'Motorbike'],
        },
      ])

       // promtps user to the correct questions, based on the selected vehicle type they would like to make
      .then((answers) => {

        if (answers.vehicleType === 'Car') {
          // creates a car
          this.createCar();
        }
        else if (answers.vehicleType === 'Truck') {
          // creates a truck
          this.createTruck();
        }
        else if (answers.vehicleType === 'Motorbike') {
          // creates a motorbike
          this.createMotorbike();
        }
      });
  }

  // method to create a car
  createCar(): void {
    // inquirer allows the user to input data
    inquirer
    // prompts the user to enter the needed data for the car
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
      ])

      .then((answers) => {
        // This will create a new Motorbike object with the specified attributes using the class name Cli
        const car = new Car(
          
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        // pushes the car to the vehicles array
        this.vehicles.push(car);
        // sets the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = car.vin;
        // performs actions on the car
        this.performActions();
      });
  }

  // method to create a truck
  createTruck(): void {
    // inquirer allows the user to input data
    inquirer

      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: 'Enter Towing Capacity',
        },
      ])

      // Uses the answers object to pass the required properties to the Truck constructor
      .then((answers) => {
        // Create a new Truck instance using the answers object
        const truck = new Truck(
          Cli.generateVin(), 
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [], // Pass an empty array for wheels
          parseInt(answers.towingCapacity) 
        );
        //  pushes the truck to the vehicles array
        this.vehicles.push(truck);
        // sets the selectedVehicleVin to the vin of the truck
        this.selectedVehicleVin = truck.vin;
        // perform actions on the truck
        this.performActions();
      });
  }

  // method to create a motorbike
  createMotorbike(): void {
    // inquirer allows the user to input data
    inquirer
    // prompts the user to enter the needed data for the motorbike
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])

      // will execute once the promise is resolved, and the resolved value will be passed as the answers parameter.
      .then((answers) => {
        // creates a new instance of the Motorbike class and assigns it to the variable motorbike.
        const motorbike = new Motorbike(
          // The generateVin method is static and is called using the class name Cli, as well as the other properties of the motorbike
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [new Wheel(
            parseInt(answers.frontWheelDiameter),
            answers.frontWheelBrand,

          ), new Wheel(
            parseInt(answers.rearWheelDiameter),
            answers.rearWheelBrand
          )],
        );
        // pushes the motorbike to the vehicles array
        this.vehicles.push(motorbike);
        // set the selectedVehicleVin to the vin of the motorbike
        this.selectedVehicleVin = motorbike.vin;
        // perform actions on the motorbike
        this.performActions();
      });
  }

  // method to find a vehicle to tow
  // parameter accepts the truck object
  findVehicleToTow(truck: Truck): void {
    // inquirer allows the user to input data
    inquirer
    // prompts the user to select a vehicle to tow
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: 'Select a vehicle to tow',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle,
            };
          }),
        },
      ])
      // After the user makes a selection, the promise returned by inquirer.prompt resolves, and the answers object is passed to the callback function
      .then((answers) => {
        const selectedVehicle = answers.vehicleToTow;

        // Checks if the selected vehicle vin is the same as the truck vin
        if (selectedVehicle.vin === truck.vin) {
          console.log('The truck cannot tow itself');
          this.performActions();
          return;
        }
      // If vehicle is not the truck, it tows the selected vehicle, logs message, & performs actions on the truck to allow user to select another action

        const wasTowed = truck.tow(selectedVehicle);

        if (wasTowed) {
        console.log(`Successfully towed ${selectedVehicle.make} ${selectedVehicle.model} (VIN: ${selectedVehicle.vin})`);
        }
      this.performActions();
        
    })
    // catches any errors in vehicle selection
    .catch((error) => {
      console.error('Error selecting vehicle:', error);
      });
    
    }

  // method to perform actions on a vehicle
  performActions(): void {
    inquirer
    // prompts the user to select an action to perform on the vehicle
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action',
          // TODO: add options to tow and wheelie
          choices: [
            'Print details',
            'Start vehicle',
            'Accelerate 5 MPH',
            'Decelerate 5 MPH',
            'Stop vehicle',
            'Turn right',
            'Turn left',
            'Reverse',
            'Tow',
            'Wheelie',
            'Select or create another vehicle',
            'Exit',
          ],
        },
      ])

      // checks the user's selected action and performs the corresponding action
      .then((answers) => {
        // perform the selected action
        if (answers.action === 'Print details') {
          // find the selected vehicle and print its details
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].printDetails();
            }
          }
        } else if (answers.action === 'Start vehicle') {
          // find the selected vehicle and start it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].start();
            }
          }
        } else if (answers.action === 'Accelerate 5 MPH') {
          // find the selected vehicle and accelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].accelerate(5);
            }
          }
        } else if (answers.action === 'Decelerate 5 MPH') {
          // find the selected vehicle and decelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].decelerate(5);
            }
          }
        } else if (answers.action === 'Stop vehicle') {
          // find the selected vehicle and stop it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].stop();
            }
          }
        } else if (answers.action === 'Turn right') {
          // find the selected vehicle and turn it right
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('right');
            }
          }
        } else if (answers.action === 'Turn left') {
          // find the selected vehicle and turn it left
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('left');
            }
          }
        }  else if (answers.action === 'Reverse') {
          // find the selected vehicle and reverse it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].reverse();
            }
          }
        }
        // performs the tow action only if the selected vehicle is a truck. Calls the findVehicleToTow method to find a vehicle to tow and pass the selected truck as an argument. After calling the findVehicleToTow method, the return statement is used to exit the performActions method.
        else if (answers.action === 'Tow') {
          const selectedVehicle = this.vehicles.find(vehicle => vehicle.vin === this.selectedVehicleVin);
          if (selectedVehicle instanceof Truck) { 
            this.findVehicleToTow(selectedVehicle);
            return;
          }
          else {
            console.log('Only Trucks can tow!');
          }
          // performs the wheelie action only if the selected vehicle is a motorbike. Calls the wheelie method on the selected motorbike. If the selected vehicle is not a motorbike, a message is logged to the console.
      } else if (answers.action === 'Wheelie') {
          const selectedVehicle = this.vehicles.find(vehicle => vehicle.vin === this.selectedVehicleVin);
          if (selectedVehicle instanceof Motorbike) {
            selectedVehicle.wheelie();
          }
          else {
            console.log('Only Motorbikes can do a wheelie!');
          }
        } else if (answers.action === 'Select or create another vehicle') {
          // start the cli to return to the initial prompt if the user wants to select or create another vehicle
          this.startCli();
          return;
        } else {
          // exit the cli if the user selects exit
          this.exit = true;
        }
        if (!this.exit) {
          // if the user does not want to exit, perform actions on the selected vehicle
          this.performActions();
        }

    });
  }
  // method to start the cli application- prompts the user to create a new vehicle or select an existing vehicle
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}
// exports the Cli class
export default Cli;

