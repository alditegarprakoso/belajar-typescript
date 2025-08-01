// Tipe data pada balikkan function

// Function ini hanya mengembalikkan nilai string saja
function getName(): string {
  return "Hello my name is Aldi";
}

console.log(getName());

// Function ini hanya mengembalikkan nilai number saja
function getAge(): number {
  return 23;
}

console.log(getAge());

// Function ini tidak boleh mengembalikkan nilai apa-apa, karena sudah dikasih "void" jadi tidak bisa me-return apapun
function printName(): void {
  console.log("Saya tinggal di Bogor");
}

printName();

// Argument Types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

const result = multiply(2, 5);
console.log(result);

// Function as type
type Tambah = (val1: number, val2: number) => number; // Contoh inisiasi untuk type

const Add: Tambah = (val1: number, val2: number): number => {
  return val1 + val2;
};

// Default Parameter
const fullName = (first: string, last: string = "Prakoso"): string => {
  return first + " " + last;
};

console.log(fullName("Aldi Tegar"));

// Optional Parameter
// Pada val2 dipakai tanda tanya karena optional, jadi jika tidak diisi maka akan diisi dengan undefined
const getGolonganDarah = (val1: string, val2?: string): string => {
  return val1 + " " + val2;
};

console.log(getGolonganDarah("A"));
