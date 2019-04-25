interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}
class User implements UserInterface {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    console.log(`User Created: ${this.name}`);
  }
  register() {
    console.log(`${this.name} is now registered`);
  }
  payInvoice() {
    console.log(`${this.name} has paid their invoice`);
  }
}

let patrick: User = new User('Patrick Hill', 'phill@stevens.edu', 43);

console.log(patrick.age);
patrick.register();

class Member extends User {
  id: number;
  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }
  payInvoice() {
    super.payInvoice();
  }
}

let tommyMember: User = new Member(1, 'Tommy', 'phill@stevens.edu', 43);
tommyMember.payInvoice();
