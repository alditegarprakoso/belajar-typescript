// Tipe data string
let name: string = "Aldi Tegar Prakoso";
console.log(name);

// Tipe data number
let age: number = 26;
console.log(age);

// Tipe data boolean
let isMarried: boolean = false;
console.log(isMarried);

// Tipe data array number
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

// Tipe data array string
let hobbies: string[] = ["coding", "gaming", "reading"];
console.log(hobbies);

// Tipe data tuple
// Tuple adalah array dengan tipe data yang sudah ditentukan, dan setiap index harus sesuai dengan tipe data yang telah ditentukan
// Contohnya pada kode di bawah ini, ada 3 index yang harus diisi sesuai dengan tipe data yang sudah ditentukan sebelumnya
// Index 0 harus string, index 1 harus number, dan index 2 harus boolean
let person: [string, number, boolean] = ["Aldi", 26, false];
console.log(person);

// Tipe data Any
// Any adalah tipe data yang bisa menampung nilai dengan tipe data apa pun
// Ini berguna ketika kita tidak tahu tipe data apa yang akan digunakan, atau ketika kita ingin menggunakan tipe data yang fleksibel
// Namun, penggunaan any harus dihindari sebisa mungkin karena menghilangkan manfaat dari TypeScript
// Sebaiknya gunakan tipe data yang lebih spesifik jika memungkinkan
let any: any = "Hello World";
any = 42; // Bisa diubah menjadi number
console.log('Variable any berubah menjadi number:', any);
any = true; // Bisa diubah menjadi boolean
console.log('Variable any berubah menjadi boolean:', any);

// Union Types
// Union types memungkinkan kita untuk mendeklarasikan variabel yang bisa memiliki lebih dari satu tipe data
let union: string | number | boolean;
union = "Hello World";
console.log(union);
union = 42;
console.log(union);
union = true;
console.log(union);

let arrayUnion: (string | number)[] = ["Aldi", 26, "Budi", 30];
console.log(arrayUnion);

// Literal Types
// Literal types memungkinkan kita untuk mendeklarasikan variabel yang hanya bisa memiliki nilai tertentu
let literal: "Aldi" | "Budi" | "Citra";
literal = "Aldi";
console.log(literal);
literal = "Budi";
console.log(literal);
literal = "Citra";
console.log(literal);