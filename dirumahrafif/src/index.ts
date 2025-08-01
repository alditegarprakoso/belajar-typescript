// Tipe data string
const nama = "Aldi Tegar Prakoso";
console.log(`Hello, saya ${nama}!`);
console.log("\n");

// Tipe data number
const umur = 25;
console.log(`Umur saya ${umur} tahun.`);
console.log("\n");

// Tipe data string
const pesan: string = "Selamat datang di TypeScript!";
console.log(pesan);
console.log("\n");

// Tipe data boolean
const isProgrammer: boolean = true;
console.log(`Apakah saya seorang programmer? ${isProgrammer}`);
console.log("\n");

// Tipe data string, number, boolean dalam satu variabel
const isHandsome: string | number | boolean = "Iya, saya tampan!";
console.log(`Apakah saya tampan? ${isHandsome}`);
console.log("\n");

// Tipe data array string
const hobbies: string[] = ["Membaca", "Menulis", "Bermain Musik"];
console.log("Hobi saya: ", hobbies.join(", "));
console.log("\n");

// Tipe data array number
const favoriteNumbers: number[] = [7, 14, 21];
console.log("Angka favorit saya: ", favoriteNumbers.join(", "));
console.log("\n");

// Tipe data array string atau number
const myBiodata: (string | number)[] = [nama, umur, hobbies.join(", ")];
console.log("Biodata saya: ", myBiodata);
console.log("\n");

// Tuple, yang merupakan array dengan tipe data yang sudah ditentukan pada setiap indeks
// Contoh: [string, number, string[]], berarti indeks 0 adalah string, indeks 1 adalah number, dan indeks 2 adalah array of string
const biodataTuple: [string, number, string[]] = [nama, umur, hobbies];
console.log("Biodata dalam tuple: ", biodataTuple);
console.log("\n");

// Array of Objects, yang merupakan array yang berisi objek
const mahasiswa: object[] = [
  { nama: "Aldi Tegar Prakoso", umur: 25, jurusan: "Teknik Informatika" },
  { nama: "Budi Santoso", umur: 22, jurusan: "Sistem Informasi" },
  { nama: "Citra Dewi", umur: 23, jurusan: "Teknik Komputer" },
];
console.log("Data mahasiswa: ", mahasiswa);
console.log("\n");

// Function dengan tipe data parameter dan return value
// Contoh: function greet(name: string): string, berarti parameter name adalah string dan return value dari fungsi ini juga string
function greet(name: string): string {
  return `Halo, ${name}! Selamat datang di TypeScript.`;
}
console.log(greet("Aldi Tegar Prakoso"));
console.log("\n");

// Function dengan tipe data parameter dan return value
// Contoh: function addNumbers(a: number, b: number): number, berarti parameter a dan b adalah number dan return value dari fungsi ini juga number
function addNumbers(a: number, b: number): number {
  return a + b;
}
console.log(addNumbers(6, 3));
console.log("\n");

// Interface, yang merupakan kontrak untuk tipe data objek
interface Mahasiswa {
  nama: string;
  umur: number;
  jurusan: string;
}

const mahasiswa1: Mahasiswa = {
  nama: "Aldi Tegar Prakoso",
  umur: 25,
  jurusan: "Teknik Informatika",
};

const mahasiswa2: Mahasiswa = {
  nama: "Budi Santoso",
  umur: 22,
  jurusan: "Sistem Informasi",
};

console.log("Data mahasiswa 1: ", mahasiswa1);
console.log("Data mahasiswa 2: ", mahasiswa2);
console.log("\n");

interface DosenPembimbing {
  namaDosen: string;
  mataKuliah: string;
}

type Skripsi = Mahasiswa & DosenPembimbing;

const skripsiAldi: Skripsi = {
  nama: "Aldi Tegar Prakoso",
  umur: 25,
  jurusan: "Teknik Informatika",
  namaDosen: "Dr. Andi Wijaya",
  mataKuliah: "Sistem Basis Data",
};

console.log("Data skripsi Aldi: ", skripsiAldi);
console.log("\n");

// Enum
enum StatusMahasiswa {
  Aktif = "Aktif",
  Cuti = "Cuti",
  Lulus = "Lulus",
}

function getStatusMahasiswa(namaMahasiswa: string, status: string): void {
  if (status === StatusMahasiswa.Aktif) {
    console.log(
      `${namaMahasiswa} saat ini berstatus ${StatusMahasiswa.Aktif}.`
    );
  } else if (status === StatusMahasiswa.Cuti) {
    console.log(`${namaMahasiswa} saat ini berstatus ${StatusMahasiswa.Cuti}.`);
  } else if (status === StatusMahasiswa.Lulus) {
    console.log(
      `${namaMahasiswa} saat ini berstatus ${StatusMahasiswa.Lulus}.`
    );
  } else {
    console.log(`${namaMahasiswa} status tidak dikenali.`);
  }
}

getStatusMahasiswa("Aldi Tegar Prakoso", "Aktif");
getStatusMahasiswa("Aldi Tegar Prakoso", "Cuti");
getStatusMahasiswa("Aldi Tegar Prakoso", "Lulus");
getStatusMahasiswa("Aldi Tegar Prakoso", "Dropout");
console.log("\n");
