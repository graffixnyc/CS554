function Greeter(greeting) {
  this.greeting = greeting;
}
Greeter.prototype.greet = function() {
  return "Hello, " + this.greeting;
};
let greeter = new Greeter("World");
console.log(greeter.greet());
