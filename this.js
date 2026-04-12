"use strict";

// global space

console.log(this);

// 1. in global space this value is global obj
// 2. for browser its window, for node js it global

// ----------------------------------------------------------------------------------------------

// inside function

function a() {
    console.log(this);
}
a(); // default binding

// 1. inside a regular function this depends on how the function is called
// 2. if we called the function without any reference to obj ---> default binding applies
// 3. (non-strict mode) ---> this is directly set to window
// 4. (strict mode) ---> this is directly set to undefined
// 5. strict/ not strick matter on default binding only

window.a(); // implicit binding
// 1. this = window
// 2. because function is called with an object reference (window.a)
// 3. object before dot becomes this
// 4. implicit binding overrides default binding rules

// ----------------------------------------------------------------------------------------------

// inside obj method

const myObj = {
    a: 50,
    x: function () {
        console.log(this);
    },
};

myObj.x(); // implicit binding

// 1. this = myObj
// 2. function is called as myObj.x()
// 3. object before dot (myObj) becomes this
// 4. implicit binding applies here as well

// ----------------------------------------------------------------------------------------------

// call

const student = {
    name: "shawn",
    greet: function () {
        console.log("hello", this.name);
    },
};
// student.greet();

const student2 = {
    name: "sheam",
};

student.greet.call(student2);

// 1. call() is detected ---> explicit binding
// 2. explicit binding has highest priority over implicit binding
// 3. this = student2 (set by call)
// 4. student.greet is only used to get the function reference
// 5. dot notation does not decide this when call/apply/bind is used

// todo
// 1. apply
// 2. bind
