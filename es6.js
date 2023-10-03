//Homework to convert code into ES6 syntax and creating instances!

class Computer {
    constructor(manufacturer, model) {
      this.manufacturer = manufacturer;
      this.model = model;
      this.isPoweredOn = false;
    }
  
    powerOn() {
      if (!this.isPoweredOn) {
        this.isPoweredOn = true;
        console.log(`${this.manufacturer} ${this.model} is now powered on.`);
      } else {
        console.log(`${this.manufacturer} ${this.model} is already powered on.`);
      }
    }
  
    powerOff() {
      if (this.isPoweredOn) {
        this.isPoweredOn = false;
        console.log(`${this.manufacturer} ${this.model} is now powered off.`);
      } else {
        console.log(`${this.manufacturer} ${this.model} is already powered off.`);
      }
    }
  }
  
  // Create instances of the Computer class
  const computer1 = new Computer('Dell', 'XPS');
  const computer2 = new Computer('HP', 'Pavilion');
  
  // Power on and power off the computers
  computer1.powerOn();
  computer2.powerOff();
  
  