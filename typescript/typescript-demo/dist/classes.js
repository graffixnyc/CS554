class User {
  constructor(name, email, age) {
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
let patrick = new User("Patrick Hill", "phill@stevens.edu", 43);
console.log(patrick.age);
patrick.register();
class Member extends User {
  constructor(id, name, email, age) {
    super(name, email, age);
    this.id = id;
  }
  payInvoice() {
    super.payInvoice();
  }
}
let tommyMember = new Member(1, "Tommy", "phill@stevens.edu", 43);
tommyMember.payInvoice();
