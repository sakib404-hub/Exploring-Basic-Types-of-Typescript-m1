//? when we do destructuring this is known as the object destructuting
//? and when we do destructutring in array this is known as the object destructuing

const user = {
    id : 101,
    name : {
        firstName : "Shakib",
        middleName : "",
        lastName : "hossen",
    },
    gender : 'Male',
    favouriteColor : "Blue"
}

// we keep in mind that while destructuring we don't use the types 
const  {id, favouriteColor : myFavColor, name : {firstName : fName, lastName : lName} } = user;
console.log(id);
console.log(myFavColor);
console.log(fName);
console.log(lName);

const friends : string[] = ['Karim', 'Rahim', 'Jabbar', 'Shakib', 'Sabbir'];
const [, , myFriend, , ] = friends;
console.log(myFriend);