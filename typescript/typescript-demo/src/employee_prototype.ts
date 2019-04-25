function employeeTest(id: number, name: string) {
  this.id = id;
  this.name = name;
}
var emp = new employeeTest(123, 'Smith');
console.log(emp);

employeeTest.prototype.email = 'smith@abc.com';
console.log("Employee's Id: " + emp.id);
console.log("Employee's name: " + emp.name);
console.log("Employee's Email ID: " + emp.email);
