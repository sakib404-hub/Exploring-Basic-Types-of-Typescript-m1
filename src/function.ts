//? there are two types of functions in typescript they are the normal function and the arrow function
//? arrow function, normal function


function add(numberOne: number, numberTwo: number) : number {
    return numberOne + numberTwo;
}
console.log(add(10, 20));

const additionArrow = (numberOne : number, numberTwo : number) : number =>{ 
    return numberOne + numberTwo
}
console.log(additionArrow(10, 20));

//? we will be now declaring a function in object that is known as method in typescript and we will be using this keyword in that method to access the properties of that object
const poorUser : {
    name : string,
    balance : number,
    addBalance(money : number) : number
}  ={
    name : "Shakib Hossen",
    balance : 0,
   addBalance(money : number) : number{
    this.balance += money;
    return this.balance + money;
   }
}
poorUser.addBalance(100);
console.log(poorUser);


const numbers : number[] = [10, 20, 30, 40, 50];
const squareArray  = numbers.map((num : number) : number =>{
    const ele = num * num;
    return ele;
})
console.log(squareArray);