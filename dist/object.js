"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    firstName: "Shakib",
    middleName: "",
    lastName: 'Hossen',
    age: 23
};
console.log(user);
//? property middleName is decelered in the user object but we are not assigning any value to it and it is not optional so we have to assign some value to it even if it is empty string otherwise it will give us an error because we have defined the type of middleName as string and it is not optional.
const user2 = {
    firstName: "Shakib",
    middleName: "",
    lastName: "Hossen"
};
console.log(user2);
//? for making it the object optional we are going to use the question mark operator after the property name and then we can assiggn value to it or we can leave it empty without any value as it will become optional.
const user3 = {
    organization: "Programming Hero",
    firstName: "Shakib",
    lastName: "Hossen",
    isMarried: false
};
console.log(user3);
console.log(user3.organization);
const person = {
    organization: "Programming Hero",
    firstName: "Shakib",
    lastName: "Hossen",
    isMarried: false
};
//# sourceMappingURL=object.js.map