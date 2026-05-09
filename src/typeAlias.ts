type User = {
      id : number,
    name : {
        firstName : string,
        middleName ? : string,
        lastName : string 
    },
    gender : 'male' | 'female',
    contactNo : string,
    address : {
        division : string,
        city  : string 
    } 
}


const user1 : User = {
    id : 101,
    name : {
        firstName : "Shakib",
        lastName : "Hossen",
    },
    gender : 'male',
    contactNo : 'xxxxx-xxxxxx',
    address : {
        division : "Dhaka",
        city : "Tangail"
    }
}
console.log(user1);

const user2 : User = {
    id : 102,
    name :{
        firstName : 'Niloy',
        lastName : "Hossen"
    },
    gender : 'male',
    contactNo : 'xxxxx-xxxxxx',
    address : {
        division : "Dhaka",
        city : "Tangail"
    }
}
console.log(user2);

//? we can use type alis in the primitive type as well as in the object
type IsAdmin = boolean;
const isAdmin  : IsAdmin = true;

type Name = string;
const name : Name = "Shakib Hossen";
console.log(name, isAdmin);

//function type defineed

type AddFunction = (numberOne : number, numberTwo : number) => number;

const add : AddFunction = (numberOne, numberTwo) =>{
    return numberOne + numberTwo;
}
console.log(add(10, 20));