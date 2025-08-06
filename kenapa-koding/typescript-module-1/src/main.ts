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

// Enum
// Enum adalah tipe data yang memungkinkan kita untuk mendeklarasikan sekumpulan nilai yang terkaitan satu sama lain
enum Color {
    Red = "Merah",
    Green = "Hijau",
    Blue = "Biru"
}
let favoriteColor: Color = Color.Blue;
console.log(favoriteColor);

// Const Enum
// Const enum adalah enum yang nilainya sudah ditentukan pada saat kompilasi, sehingga tidak perlu dibuatkan objek enum pada saat runtime
// Ini membuat const enum lebih efisien dalam penggunaan memori dan performa
const enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}
let direction: Direction = Direction.Up;
console.log(direction);

// Unknown Type
// Unknown type mirip dengan any, tetapi lebih aman karena kita harus melakukan pengecekan tipe data sebelum menggunakannya
let unknownValue: unknown;
unknownValue = 42;
console.log(unknownValue);

unknownValue = true;
console.log(unknownValue);

unknownValue = "Hello World";
console.log(unknownValue);

if (typeof unknownValue === "string") {
    unknownValue.toUpperCase(); // Aman untuk dipanggil karena sudah dicek tipe datanya
    console.log(unknownValue.toUpperCase());
}

// Type Assertions
// Type assertions memungkinkan kita untuk memberi tahu TypeScript bahwa kita yakin tipe data dari suatu variabel
let anyValue: any = "Hello World";
// Kita bisa menggunakan type assertions untuk mengubah tipe data dari any menjadi string
// Ada dua cara untuk melakukan type assertions: menggunakan as atau menggunakan tanda kurung sudut <>
let stringLength: number = (anyValue as string).length;
console.log(stringLength);
let anotherStringLength: number = (<string>anyValue).length;
console.log(anotherStringLength);