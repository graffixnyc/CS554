"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
  constructor(name) {
    this._fullName = name;
  }
  get fullName() {
    console.log("in get");
    return this._fullName;
  }
  set fullName(newName) {
    console.log("in set");
    if (newName) {
      this._fullName = newName;
    } else {
      throw "Name not supplied";
    }
  }
}
exports.Employee = Employee;
let employeeInstance = new Employee();
employeeInstance.fullName = "Patrick Hill";
if (employeeInstance.fullName) {
  console.log(employeeInstance.fullName);
}
let employeeInstance2 = new Employee();
console.log((employeeInstance2.fullName = "John Doe"));
