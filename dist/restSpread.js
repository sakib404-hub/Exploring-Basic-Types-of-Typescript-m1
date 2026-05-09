"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//? spread operator
const friends = ["Shakib", "Hossen", "Sakib", "Sabbir"];
const schoolFriends = ["Rafi", "Sabbir", "Sakib", 'Pintu', 'Chintu', 'Bulbul'];
const collageFriends = ['Imran', 'Sagor', 'Badsha', 'Zobaer', 'Shahriar'];
const allFriends = [...friends, ...schoolFriends, ...collageFriends];
console.log(allFriends);
const allFriends2 = [...friends];
allFriends2.push(...schoolFriends);
allFriends2.push(...collageFriends);
console.log(allFriends2);
const user = {
    name: "Shakib Hossen",
    mobileNo: 1876543210
};
const otherInformation = {
    hobbies: ['Playing Cricket', 'Watching Cartoons', 'Traveling'],
    profession: "Full Stack Marn Developer"
};
const userInformation = { ...user, ...otherInformation };
console.log(userInformation);
// rest operator 
const sendInvitation = (friendOne, friendTwo, friendThree) => {
    return `Dear ${friendOne}, ${friendTwo} and ${friendThree}, you are invited to my birthday party.`;
};
console.log(sendInvitation("Shakib", "Naim", "Niloy"));
const sendInvite = (...friends) => {
    friends.forEach((friend) => {
        console.log(`Dear ${friend}, you are invited to my birthday party`);
    });
};
sendInvite("Shakib", "Naim", "Niloy", "Sabbir", "Sakib", 'Pintu', 'Chintu', 'Bulbul', 'Imran', 'Sagor', 'Badsha', 'Zobaer', 'Shahriar');
const sendInvite3 = (...friends) => {
    friends.forEach((fri) => {
        console.log(` Dear ${fri}, you are invited to my weeding party and also in the bechalor party!`);
    });
};
sendInvite3("Shakib", "Naim", "Niloy", "Sabbir", "Sakib", 'Pintu', 'Chintu', 'Bulbul', 'Imran', 'Sagor', 'Badsha', 'Zobaer', 'Shahriar');
//# sourceMappingURL=restSpread.js.map