// Function di TypeScript

// Function di bawah ini menggunakan tipe data string sebagai parameter dan mengembalikan string.
function greet(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// Parameter Function Optional
function greetParameterOptional(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, you are ${age} years old.`;
  }
  return `Hello ${name}!`;
}
console.log(greetParameterOptional("Alice"));

// Parameter Default
function greetParameterDefault(name: string, age: number = 20): string {
  return `Hello ${name}, you are ${age} years old.`;
}
console.log(greetParameterDefault("Alice"));

// Void dan Never
// Void adalah tipe data yang tidak mengembalikan nilai apapun.
function printName(): void {
  console.log("Saya tinggal di Bogor");
}
printName();

// Never adalah tipe data yang mengembalikan nilai selalu error atau tidak akn pernah kembali.
function error(message: string): never {
  throw new Error(message);
}
// error("Terjadi error"); // Ini di comment karena akan error, jadi function selanjutnya tidak akan di eksekusi

// Arrow Function
const multiply = (x: number, y: number): number => x * y;
console.log(multiply(3, 3));

// Overload Function, adalah function dengan nama sama, namun bisa di combine dengan parameter yang berbeda
function add(a: number, b: number): number;
function add(a: string, b: string): string;
// Ini adalah overload, jadi any di sini menggabungkan parameter a dan b dengan tipe data apa pun, contohnya di sini adalah number dan string
function add(a: any, b: any): any {
  return a + b;
}
console.log(add(1, 2));
console.log(add("A", "B"));
// console.log(add(1, "B")); // Ini akan error karena tipe data parameter berbeda

// Callback
function processData(data: number[], callback: (item: number) => void) {
  data.forEach(callback);
}
function logItem(item: number) {
  console.log(item * 2);
}
processData([1, 2, 3], logItem);
