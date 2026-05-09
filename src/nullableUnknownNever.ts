console.log('Here we will be learning about the nullable, unknown and never operator');

//? nullable types

const getUser = (input : string | null) =>{
  input ? console.log(`From DataBase : ${input}`) : console.log(`From Database : ALL User!`);
}
getUser(null);


//? unknown types 
const discountCalculator =(input : unknown) =>{
    if(typeof input === 'number'){
        const discountedPrice =  input - (input * 0.1);
        console.log(`Discounted Price : ${discountedPrice}`);
    }else if(typeof input === 'string'){
        const [price] = input.split(' ');
        const discountedPrice = Number(price) - Number(price) * 0.1;
        console.log(`Discounted Price : ${discountedPrice}`);
    }else{
        console.log('Invalid Input');
    }
}

discountCalculator(100);
discountCalculator('100 TK');
discountCalculator(null);


//? void

const throwError = (msg : string) : never =>{
    throw new Error(msg);
}

