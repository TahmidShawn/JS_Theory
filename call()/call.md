# JavaScript `.call()` Method

## Overview

The `.call()` method is a built-in property of JavaScript functions that allows you to **invoke a function with a specific `this` context**.
In other words, you can **borrow a method from one object and execute it for another object**.

---

## Basic Example

Suppose we have a `Person` class with a method to get the full name:

```javascript
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const parent = new Person("Alice", "Johnson");
console.log(parent.getFullName()); // Output: "Alice Johnson"
```

Now, imagine we have another class `Child`, and we want to use the `getFullName` method from `Person`:

```javascript
class Child {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const child = new Child("Bob", "Smith");

// Borrow the getFullName method from Person
console.log(parent.getFullName.call(child)); // Output: "Bob Smith"
```

### Explanation

* `.call(child)` sets `this` inside `getFullName()` to the `child` object.
* The method executes as if it belonged to the `child`, even though it is defined in `Person`.

---

## Practical Example: E-commerce Scenario

Consider a `Product` class with a method to apply a discount:

```javascript
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    applyDiscount(discount) {
        this.price = this.price - discount;
        return this.price;
    }
}

const laptop = new Product("Laptop", 75000);
```

Now suppose we have another class `CartItem`:

```javascript
class CartItem {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

const cartItem = new CartItem("Smartphone", 20000, 2);
```

We can borrow the `applyDiscount` method from `Product`:

```javascript
const discountedPrice = laptop.applyDiscount.call(cartItem, 700);
console.log(discountedPrice); // Output: 19300
```

### Explanation

* `this` inside `applyDiscount()` is set to `cartItem`.
* The discount (`700`) is passed as a normal argument.
* The method is reused without rewriting it.

---

## Key Points

* `.call()` allows a function to run with a specific `this`.
* The **first argument** is always the object to use as `this`.
* Additional arguments are passed normally.

### Related Methods

* `.apply(thisArg, [arg1, arg2])` → takes arguments as an array
* `.bind(thisArg, arg1, arg2)` → returns a new function

> ⚠️ `.call()` is not OOP itself — it’s a tool for controlling `this`.

---

## When to Use

* Borrowing methods between objects
* Dynamically setting `this`
* Avoiding duplicate code
