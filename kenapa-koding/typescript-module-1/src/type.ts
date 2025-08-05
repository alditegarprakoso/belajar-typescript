// Type Alias adalah fitur TypeScript yang memungkinkan kita untuk memberikan nama pada tipe data tertentu.
// Ini berguna untuk membuat kode lebih mudah dibaca dan dikelola.

type Person = {
    name: string;
    age: number;
    isMarried: boolean;
};

// Contoh penggunaan Type Alias
const person1: Person = {
    name: "Aldi",
    age: 26,
    isMarried: false,
};
console.log(person1);

// Type Alias juga dapat digunakan untuk mendefinisikan tipe data yang lebih kompleks, seperti union types atau intersection types.
type ID = string | number; // Union type
type Product = {
    id: ID;
    name: string;
    price: number;
};

// Contoh penggunaan union type
const product1: Product = {
    id: 1,
    name: "Laptop",
    price: 5000000,
};
console.log(product1);

// ====================================================================================================================================================

// Optional Properties
// Optional properties memungkinkan kita untuk mendefinisikan properti yang tidak wajib ada pada sebuah objek
type User = {
    username: string;
    email?: string; // Properti email bersifat opsional
};

// Contoh penggunaan optional properties
const user1: User = {
    username: "alditegar",
};
console.log(user1);