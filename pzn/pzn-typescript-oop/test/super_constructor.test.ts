describe("Super Constructor", () => {
  class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  class Employee extends Person {
    department: string;
    constructor(name: string, department: string) {
      super(name); // memanggil constructor parent
      this.department = department;
    }
  }

  it("should be able to use super constructor", () => {
    const employee = new Employee("Aldi", "IT");
    console.log(employee.name, employee.department);
  });
});
