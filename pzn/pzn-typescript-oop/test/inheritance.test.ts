describe('Class', () => {
    // Parent class 
    class Employee {
        name: string
        
        constructor(name: string) {
            this.name = name
        }
    }

    class Manager extends Employee {
        
    }

    class Director extends Manager {

    }


    it('Should inheritance', () => {
        const employee = new Employee('Aldi')
        console.log(employee.name);

        const manager = new Manager('Tegar')
        console.log(manager.name);
        
        const director = new Director('Prakoso')
        console.log(director.name);
        
    })
 })