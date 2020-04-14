function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 1));
let mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mySum('2', 2));
let myArrowSum = (num1, num2) => {
    return num1 + num2;
};
console.log(myArrowSum(5, 5));
function getName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(getName('Patrick', 'Hill'));
function getName2(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    else {
        return `${firstName} ${lastName}`;
    }
}
console.log(getName2('Patrick', 'Hill'));
console.log(getName2('Aiden'));
function myVoidFunc(num1, num2) {
    console.log(num1 + num2);
}
console.log(myVoidFunc(1, 2));
