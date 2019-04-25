interface IPerson {
  firstName: string;
  lastName: string;
  sayHi: () => string;
}

var customer: IPerson = {
  firstName: 'Tom',
  lastName: 'Hanks',
  sayHi: (): string => {
    return 'Hi there';
  }
};

console.log('Customer Object ');
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

var employee: IPerson = {
  firstName: 'Tommy',
  lastName: 'Lee',
  sayHi: (): string => {
    return 'Hello, from Tommy Lee';
  }
};

console.log('Employee  Object ');
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi());
