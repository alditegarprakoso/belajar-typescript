export class User {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  //   Code yang dibawah ini yang lebih simple, dan fungsinya sama seperti code diatas
  //   constructor(public name: string, public age: number) {
  //     this.name = name;
  //   this.age = age;
  //   }

  setName(value: string): void {
    this.name = value;
  }

  getName = (): string => {
    return this.name;
  };
}

// let user = new User("Aldi Tegar Prakoso", 23);
// console.log(user);

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";
  static getRoleName: string = "Admin";

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  static getNameRole() {
    return "Hey anda";
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  set email(value: string) {
    this._email = value;
  }

  get email(): string {
    return this._email;
  }
}

// let admin = new Admin("087654345432", "Aldi Tegar Prakoso", 23);
// console.log(admin);
// admin.getName();
// admin.getRole();
// admin.setName("Aldi");
// admin.phone;

// admin.email = "alditegarprakoso@gmail.com";
// console.log(admin.email);

let admin = Admin.getNameRole();
console.log(admin);
