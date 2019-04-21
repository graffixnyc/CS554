let myString: string;
myString = 'Hello' + ' World';
console.log(myString);

let myNum: number;
myNum = 2;
console.log(myNum);

let myBool: boolean;
myBool = true;
console.log(myBool);

let myAny: any;
myAny = 3;
console.log(myAny);
myAny = 'Patrick';
console.log(myAny);
myAny = true;

let strArr: string[];
strArr = ['Vince', 'Tommy', 'Nikki', 'Mick'];
console.log(strArr);
//strArr = [1, 'tommy'];

//another way to declare a typed array
let strArr2: Array<string>;
strArr2 = ['Vince', 'Tommy', 'Nikki', 'Mick'];
let numArr: Array<number>;
numArr = [1, 2, 3, 4];

let strNumTuple: [string, number];
strNumTuple = ['hello', 2];
console.log(strNumTuple);

let myVoid: void;
myVoid = null;
console.log(myVoid);

let myUndefined: undefined;
myUndefined = undefined;
console.log(myUndefined);

let myNull: null;
myNull = null;
console.log(myNull);

let mystring2: string;
mystring2 = 'John';
