// Object Creation ways

// type 1 -> obj literal

const user = {
    username: "Lionel",
    age: 38,
    role: "forward",
    greet: function () {
        console.log("hello", this.username);
    },
};

//-- chain : user → Object.prototype → null

// user.greet();

const parent = {
    greet() {
        console.log("hello", this.name);
    },
};

const child1 = {
    name: "kavin",
    __proto__: parent,
};

const child2 = {
    name: "suarez",
    __proto__: parent,
};

//-- chain : child1 → parent → Object.prototype → null

// child1.greet();
// child2.greet();

//-- issue

// 1. not reusable
// 2. no blueprint
// 3. no easy way to define shared methods for multiple objects
// 4. need to add manually share methods using __proto__
// 5. not scalable

//-- solutions : use constructor function

// ----------------------------------------------------------------------------------------------

//-- type 2 -> constructor function

function Player(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
}

const player1 = new Player("palmer", 24, "forward");

Player.prototype.greet = function () {
    console.log("hello", this.name);
};

//-- chain: player1 → Player.prototype → Object.prototype → null

// player1.greet();

//-- solved

// 1. reusable
// 2. blueprint
// 3. shared methods via prototype (.prototype)

// --issue
// 1. don't follow strict encapsulation
// 2. difficult to understand

//-- solutions : factory function

//-----------------------------------------------------------------------------------------------

//-- type 3 -> factory function

function Person(name, age) {
    return {
        name,
        greet() {
            console.log("hello", name);
        },
    };
}

console.log(Person.prototype);

const person1 = Person("shawn", 18);
person1.greet();

//-- solved

// 1. encapsulation fixed
// 2. easy to understand

//-- issue

// 1. method duplication again

//-- solutions : Object.create

//-----------------------------------------------------------------------------------------------

//-- type 4 -> Object.create

const parentProto = {};
