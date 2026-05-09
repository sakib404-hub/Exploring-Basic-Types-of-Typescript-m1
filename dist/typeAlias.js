"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    id: 101,
    name: {
        firstName: "Shakib",
        lastName: "Hossen",
    },
    gender: 'male',
    contactNo: 'xxxxx-xxxxxx',
    address: {
        division: "Dhaka",
        city: "Tangail"
    }
};
console.log(user1);
const user2 = {
    id: 102,
    name: {
        firstName: 'Niloy',
        lastName: "Hossen"
    },
    gender: 'male',
    contactNo: 'xxxxx-xxxxxx',
    address: {
        division: "Dhaka",
        city: "Tangail"
    }
};
console.log(user2);
const isAdmin = true;
const name = "Shakib Hossen";
console.log(name, isAdmin);
const add = (numberOne, numberTwo) => {
    return numberOne + numberTwo;
};
console.log(add(10, 20));
//# sourceMappingURL=typeAlias.js.map