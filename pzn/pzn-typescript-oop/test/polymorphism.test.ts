describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(employee: Employee) : void {
    if (employee instanceof VicePresident) {
      console.log(`Hello ${employee.name}, I'm VP`);
    } else if (employee instanceof Manager) {
        console.log(`Hello ${employee.name}, I'm manager`);
    } else {
      console.log(`Hello ${employee.name}`);
    }
  }

  it("Polymorphism", () => {
    let employee = new Employee("Aldi");
    console.log(employee);

    employee = new Manager("Tegar");
    console.log(employee);

    employee = new VicePresident("Prakoso");
    console.log(employee);
  });

  it("Support Polymorphism method", () => {
    sayHello(new Employee("Aldi"));
    sayHello(new Manager("Tegar"));
    sayHello(new VicePresident("Prakoso"));
  })
});
