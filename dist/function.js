"use strict";
//? there are two types of functions in typescript they are the normal function and the arrow function
//? arrow function, normal function
Object.defineProperty(exports, "__esModule", { value: true });
function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
console.log(add(10, 20));
const additionArrow = (numberOne, numberTwo) => {
    return numberOne + numberTwo;
};
console.log(additionArrow(10, 20));
//? we will be now declaring a function in object that is known as method in typescript and we will be using this keyword in that method to access the properties of that object
const poorUser = {
    name: "Shakib Hossen",
    balance: 0,
    addBalance(money) {
        this.balance += money;
        return this.balance + money;
    }
};
poorUser.addBalance(100);
console.log(poorUser);
const numbers = [10, 20, 30, 40, 50];
const squareArray = numbers.map((num) => {
    const ele = num * num;
    return ele;
});
console.log(squareArray);
//# sourceMappingURL=function.js.map