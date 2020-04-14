let customer = {
    firstName: 'Tom',
    lastName: 'Hanks',
    sayHi: () => {
        return `Hello, ${customer.firstName}, ${customer.lastName} `;
    }
};
console.log('Customer Object');
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
let employee = {
    firstName: 'Tommy',
    lastName: 'Lee',
    sayHi: () => {
        return `Hello, ${employee.firstName}, ${employee.lastName} `;
    }
};
console.log('Employee Object');
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi());
