"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    if (role === 'admin') {
        return 'admin dashboard';
    }
    else if (role === 'user') {
        return 'user dashboard';
    }
    else {
        return 'guest dashboard';
    }
};
const dash = getDashboard('guest');
console.log(dash);
const chowdhury = {
    id: '101',
    name: 'Shakib Hossen',
    phnNo: '017xxxxxxxx',
    designation: 'Software Engineer',
    teamSize: 5
};
console.log(chowdhury);
//# sourceMappingURL=union.js.map