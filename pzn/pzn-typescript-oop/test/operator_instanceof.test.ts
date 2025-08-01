describe('Operator Instanceof', () => {
    class Employee {
    }

    class Manager {
    }

    it('should be able to use instanceof', () => {
        const employee = new Employee();
        const manager = new Manager();

        expect(employee instanceof Employee).toBe(true);
        expect(employee instanceof Manager).toBe(false);
        
        expect(manager instanceof Employee).toBe(false);
        expect(manager instanceof Manager).toBe(true);
    })
 })