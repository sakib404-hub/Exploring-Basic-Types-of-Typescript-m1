//? spread operator
const friends : string[] = ["Shakib", "Hossen", "Sakib", "Sabbir"];
const schoolFriends : string[] = ["Rafi", "Sabbir", "Sakib", 'Pintu', 'Chintu', 'Bulbul'];
const collageFriends : string[] = ['Imran', 'Sagor', 'Badsha', 'Zobaer', 'Shahriar'];

const allFriends : string[] =[...friends, ...schoolFriends, ...collageFriends]
console.log(allFriends);

const allFriends2 : string[] = [...friends];
allFriends2.push(...schoolFriends);
allFriends2.push(...collageFriends);
console.log(allFriends2);

const user : {
    name  ? : string,
    mobileNo ? : number
} = {
    name : "Shakib Hossen", 
    mobileNo : 1876543210
}
const otherInformation : {
    hobbies ? : string[],
    profession ?  : string
} = {
    hobbies : ['Playing Cricket', 'Watching Cartoons', 'Traveling'],
    profession : "Full Stack Marn Developer"
}

const userInformation = {...user, ...otherInformation}
console.log(userInformation);


// rest operator 
const sendInvitation = (friendOne : string, friendTwo : string, friendThree : string) : string =>{
    return `Dear ${friendOne}, ${friendTwo} and ${friendThree}, you are invited to my birthday party.`
}
console.log(sendInvitation("Shakib", "Naim", "Niloy"));

const sendInvite = (...friends : string[]) =>{
    friends.forEach((friend : string)=>{
        console.log(`Dear ${friend}, you are invited to my birthday party`);
    })
}
sendInvite("Shakib", "Naim", "Niloy", "Sabbir", "Sakib", 'Pintu', 'Chintu', 'Bulbul', 'Imran', 'Sagor', 'Badsha', 'Zobaer', 'Shahriar');


const sendInvite3 = (...friends : string[])=>{
    friends.forEach((fri : string)=>{
        console.log(` Dear ${fri}, you are invited to my weeding party and also in the bechalor party!`);
    })
}
sendInvite3("Shakib", "Naim", "Niloy", "Sabbir", "Sakib", 'Pintu', 'Chintu', 'Bulbul', 'Imran', 'Sagor', 'Badsha', 'Zobaer', 'Shahriar');