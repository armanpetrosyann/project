'use strict';

let user = {
    name: "John",
}

let id = Symbol("id");

user[id] = 1;
alert(`User name is ${user.name} and user id is ${user[id]}`);
debugger;