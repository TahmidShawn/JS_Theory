````markdown
# JavaScript `.call()` Method

## Overview

The `.call()` method is a built-in property of JavaScript functions that allows you to **invoke a function with a specific `this` context**. In other words, you can **borrow a method from one object and execute it for another object**.

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
````

Now, imagine we have another class, `Child`, and we want to use the `getFullName` method from `Person`:

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

**Explanation:**

- `.call(child)` sets `this` inside `getFullName()` to the `child` object.
- The method is executed as if it belonged to the `child` object, even though it is defined in `Person`.

---

## Practical Example: E-commerce Scenario

Consider a `Product` class with a method to calculate a discounted price:

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

Suppose we have another class `CartItem`:

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

We can **borrow the `applyDiscount` method from `Product`** for our `CartItem` object:

```javascript
const discountedPrice = laptop.applyDiscount.call(cartItem, 700);
console.log(discountedPrice); // Output: 19300
```

**Explanation:**

- `this` inside `applyDiscount()` is set to `cartItem`.
- The discount argument (`700`) is passed normally to the function.
- We successfully reuse the `Product` method for `CartItem` without rewriting it.

---

## Key Points

1. **Purpose:** `.call()` allows a function to be invoked with a specific `this` value.
2. **First argument:** Must be the object to use as `this`.
3. **Subsequent arguments:** Passed to the function as normal parameters.
4. **Related methods:**
    - `.apply(thisArg, [arg1, arg2, ...])` → accepts arguments as an array.
    - `.bind(thisArg, arg1, arg2, ...)` → returns a new function with `this` permanently bound.

5. **Note:** `.call()` is **not object-oriented programming** by itself; it’s simply a tool for **method borrowing or dynamic `this` assignment**.

---

### When to Use

- Borrowing a method from one object for another.
- Dynamically setting `this` in functions.
- Reusing functions without duplicating code.
