console.log('Here we will learn about the difference of useage of ternary operator');
//? ? --> ternary and the optional chainning operator
//? ?? ---> known as the nullish coalescing operator 

const userAge = 12;
const biyerJonnoEligible = (age : number) : boolean =>{
    return age >= 18 ? true : false;
}

const isEligible = biyerJonnoEligible(userAge);
isEligible ? console.log('Biyer jonno eligible') : console.log('Biyer jonno eligible na');


//? nullish coalescing operator
let userTheme = undefined;
userTheme = 'dark';
userTheme = null;
userTheme = 'green theme';
const theme = userTheme ?? 'light';
console.log(theme);

const isAuthenticated = "";
const resultWithTernary = isAuthenticated ? isAuthenticated : 'you are a guest user';

const resultWithNulish = isAuthenticated ?? "You are aguest user";
console.log({resultWithNulish, resultWithTernary});

//? optional chaining operator
const user : {
    address : {
        country : string,
        city : string,
        town : string,
        postalCode ? : number //? making this property optional through the optional chaining meaning dileu somossa nai na dileu somossa nai
    }
} = {
    address : {
        country : 'Bangladesh',
        city : 'Dhaka',
        town : 'Puran Dhaka',
        postalCode : 1205
    }
}

console.log(user);
console.log(user?.address?.country);