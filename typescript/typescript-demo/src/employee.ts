export class Employee {
  private _fullName: string;
  constructor(name?: string) {
    this._fullName = name;
  }

  get fullName(): string {
    console.log('in get');
    return this._fullName;
  }

  set fullName(newName: string) {
    console.log('in set');
    if (newName) {
      this._fullName = newName;
    } else {
      throw 'Name not supplied';
    }
  }
}

let employeeInstance = new Employee();
employeeInstance.fullName = 'Patrick Hill';
if (employeeInstance.fullName) {
  console.log(employeeInstance.fullName);
}

let employeeInstance2 = new Employee();
console.log((employeeInstance2.fullName = 'John Doe'));
