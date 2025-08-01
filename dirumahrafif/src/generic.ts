// Generic Course

// Generic bisa menggunakan T biasa atau bisa juga menggunakan nama lain seperti U, V, K, dan lain-lain.
// Tetapi yang biasa digunakan adalah T
function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

// Contoh penggunaan
const numbers = [1, 2, 3, 4, 5];
const firstNumber = getFirstElement<number>(numbers);
console.log(firstNumber); // Output: 1

const strings = ["A", "B", "C"];
const firstString = getFirstElement<string>(strings);
console.log(firstString); // Output: A

// Generic dengan beberapa tipe data
function getPair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

// Contoh penggunaan
const pair1 = getPair<number, string>(1, "A");
const pair2 = getPair<string, number>("B", 2);
console.log(pair1); // Output: [1, "A"]
console.log(pair2); // Output: ["B", 2]
