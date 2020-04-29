class Employee {
	private _fullName: string;

	constructor(name?: string) {
		this._fullName = name;
	}

	get fullName(): string {
		console.log('in Getter');
		return this._fullName;
	}

	set fullName(newName: string) {
		console.log('in Setter');
		if (newName) {
			this._fullName = newName;
		} else {
			throw 'Name not supplied';
		}
	}
}

let empInstance: Employee = new Employee();
empInstance.fullName = 'Patrick Hill';
if (empInstance.fullName) {
	console.log(empInstance.fullName);
}

let empInstance2: Employee = new Employee('John Smith');
console.log(empInstance2.fullName);

empInstance2.fullName = 'Mike Jones';

console.log(empInstance2.fullName);
