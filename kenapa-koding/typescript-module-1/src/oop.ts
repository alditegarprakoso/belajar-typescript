// Class Product
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  displayProduct(): void {
    console.log(`Product: ${this.name}, Price: ${this.price}`);
  }
}

const product1 = new Product("Laptop", 5000000);
product1.displayProduct();

// Inheritance
class ElectronicProduct extends Product {
  waranty: number;

  constructor(name: string, price: number, waranty: number) {
    super(name, price); // Super itu untuk menggunakan constructor di class Product/Parent
    this.waranty = waranty;
  }

  displayElectronicProduct(): void {
    super.displayProduct(); // Super itu untuk menggunakan method di class Product/Parent
    console.log(`Waranty: ${this.waranty} years`);
  }
}

const electronicProduct1 = new ElectronicProduct("Laptop", 5000000, 12);
electronicProduct1.displayElectronicProduct();
