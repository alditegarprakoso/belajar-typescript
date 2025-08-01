describe("Method Overriding", () => {
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${this.name}`);
    }

    sayGoodBye(name: string): void {
      console.log(`Good bye ${name}, see you later`);
    }
  }

  class Manager extends Employee {
    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${this.name}, I'm your manager`);
      
    }

    sayGoodBye(name: string): void {
      super.sayGoodBye(name);
    }
  }

  it("Should can override method", () => {
    const employee: Employee = new Employee("Aldi");
    employee.sayHello("Tegar");
    employee.sayGoodBye("Prakoso");

    const manager: Manager = new Manager("Aldi");
    manager.sayHello("Tegar");
    manager.sayGoodBye("Prakoso");
  });
});
