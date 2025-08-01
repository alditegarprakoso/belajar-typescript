describe('Parameter Properties', () => {
    class Person {
        constructor(public name: string = 'Aldi') {
            this.name = name
        }
    }

    it('should be able to use parameter properties', () => {
        const person = new Person();
        console.log(person.name);

        person.name = "Tegar"
        console.log(person.name);
    })
 })