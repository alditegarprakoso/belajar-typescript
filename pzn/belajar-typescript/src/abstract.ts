abstract class Kendaraan {
  abstract roda: number;

  start(): void {
    console.log("Brummmm");
  }
}

class Mobil extends Kendaraan {
  roda: number = 4;
}

let mobil = new Mobil();

console.log(mobil.roda);
mobil.start();

class Motor extends Kendaraan {
  roda: number = 2;
}
let motor = new Motor();
console.log(motor.roda);
motor.start();
