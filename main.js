'use strict';

// let user = {
//     name: 'John',
//     age: 30,
// };
//
// delete user.age;
//
// if (user.age === null || user.age === undefined) {
//     alert('Age is deleted');
// }
//
// alert(`User name is ${user.name}, user age is ${user.age}`)

// function makeUser(name, age) {
//     return {
//         name: 'John',
//         age: 30
//     };
// }
//
// let user = makeUser();
// alert(user.name);
// alert(user.age);
//
// if ('year' in user) {
//     alert('Found');
// } else {
//     alert('not found');
// }


let obj = {
    test: undefined
};

alert(obj.test);
alert('test' in obj);