// string
let nama: string = "Aldi";
nama = "Aldi Tegar Prakoso";

// number
let umur: number;
umur = 20;
umur = 23;

// boolean
let isMarried: boolean;
isMarried = false;
isMarried = true;

// Any -> Type data any bisa menampung banyak tipe data
let heroes: any = "Iron Man";
heroes = 12; // heroes yang sebelumnya dari string bisa diisi juga dengan number atau tipe data yang lainnya
heroes = [];
heroes = {};
heroes = true || false;

// Union type
let phone: number | string; // Bisa dua tipe data
phone = 628381372229;
phone = "08381372229";
