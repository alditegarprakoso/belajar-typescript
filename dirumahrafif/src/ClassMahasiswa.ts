class Mahasiswa {
  nim: number;
  nama: string;

  constructor(paramNim: number, paramNama: string) {
    this.nim = paramNim;
    this.nama = paramNama;
  }

  // Method untuk menampilkan data mahasiswa
  showData(): string {
    return `Mahasiswa dengan NIM ${this.nim} bernama ${this.nama}`;
  }
}

const Aldi = new Mahasiswa(123456, "Aldi Tegar Prakoso");
console.log(Aldi.showData());
