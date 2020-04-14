function employeeTest(id: number, name: string) {
	this.id = id;
	this.name = name;
}

let emp = new employeeTest(123, 'Smith');
console.log(emp);

employeeTest.prototype.email = 'phill@stevens.edu';

console.log(emp.email);
