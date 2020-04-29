interface IPerson {
	firstName: string;
	lastName: string;
	sayHi: () => string;
}

let customer: IPerson = {
	firstName: 'Tom',
	lastName: 'Hanks',
	sayHi: (): string => {
		return `Hello, ${customer.firstName}, ${customer.lastName} `;
	}
};

console.log('Customer Object');
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

let employee: IPerson = {
	firstName: 'Tommy',
	lastName: 'Lee',
	sayHi: (): string => {
		return `Hello, ${employee.firstName}, ${employee.lastName} `;
	}
};

console.log('Employee Object');
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi());
