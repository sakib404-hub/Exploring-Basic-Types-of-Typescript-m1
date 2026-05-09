"use strict";
//? array , object 
Object.defineProperty(exports, "__esModule", { value: true });
//?  here the array we are declaring and using must be on a particular data types
let bazarList = ["rice", "potato", "onion", "garlic", 'egg'];
console.log(bazarList);
//? we can also define mixed array with multiple data types using the OR operator then we can push to that defined types of data to that array
let mixedArray = ['eggs', 12, 'milk', 1, 'sugar', 2];
console.log(typeof mixedArray);
mixedArray.push(78);
mixedArray.push('flour');
console.log(mixedArray);
//! Js - tuple
let coordinates = [10, 20];
//? let coordinates : [number, number] = [10, 20, 40]; 
//? error because we have defined only 2 numbers in the tuple but we are trying to add 3 numbers
let couple = ['Shakib', 'Hossen'];
console.log(couple);
let person = ['shakib', 24];
console.log(person);
let destination = ['Dhaka', 'Chittagong', 2];
console.log(destination);
//# sourceMappingURL=nonPrimitive.js.map