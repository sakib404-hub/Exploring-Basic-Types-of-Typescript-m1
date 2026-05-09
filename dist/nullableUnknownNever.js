"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Here we will be learning about the nullable, unknown and never operator');
//? nullable types
const getUser = (input) => {
    input ? console.log(`From DataBase : ${input}`) : console.log(`From Database : ALL User!`);
};
getUser(null);
//? unknown types 
const discountCalculator = (input) => {
    if (typeof input === 'number') {
        const discountedPrice = input - (input * 0.1);
        console.log(`Discounted Price : ${discountedPrice}`);
    }
    else if (typeof input === 'string') {
        const [price] = input.split(' ');
        const discountedPrice = Number(price) - Number(price) * 0.1;
        console.log(`Discounted Price : ${discountedPrice}`);
    }
    else {
        console.log('Invalid Input');
    }
};
discountCalculator(100);
discountCalculator('100 TK');
discountCalculator(null);
//? void
const throwError = (msg) => {
    throw new Error(msg);
};
throwError('This is an error message');
//# sourceMappingURL=nullableUnknownNever.js.map