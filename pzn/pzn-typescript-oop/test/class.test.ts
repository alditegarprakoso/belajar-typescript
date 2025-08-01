describe("Class", () => {
  class Customer {
    readonly id: number;
    name: string = ""; // Default Value
    age?: number;

    constructor(id: number, name: string) {
      console.log("Create new customer");

      this.id = id;
      this.name = name;
    }

    sayHello (name: string): void {
      console.log(`Hello ${name}, my name is ${this.name}`);
    }
  }

  class Order {}

  it("Should can create class", () => {
    const customer: Customer = new Customer(1, "Aldi");
    const order: Order = new Order();

    console.log(customer);
  });

  it("Should can create constructor", () => {
    const customerOne: Customer = new Customer(2, "Tegar");
    const customerTwo: Customer = new Customer(3, "Prakoso");

    customerOne.age = 25;
    customerTwo.age = 24 + 1;

    console.log(customerOne);
    console.log(customerTwo);
  });

  it("Should can can have method", () => {
    const customer: Customer = new Customer(2, "Aldi");
    customer.sayHello("Tegar");

  });
});
