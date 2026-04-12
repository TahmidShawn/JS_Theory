// note :

// 1. almost everything in js eventually ends up at Object.prototype
// 2. we should not change our Object.prototype because it can affects every object in JavaScript globally and makes code unpredictable

// array → Array.prototype → Object.prototype → null
// function → Function.prototype → Object.prototype → null
// {} → Object.prototype → null
// div → HTMLElement → Element → Node → EventTarget → Object.prototype → null
