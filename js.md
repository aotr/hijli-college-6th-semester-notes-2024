### Introduction to JavaScript

JavaScript is a programming language used to create interactive effects within web browsers. It enables you to add dynamic elements like form validation, interactive maps, animated graphics, and more.

---

### JavaScript Basics

#### Variables

Variables store data values. Use `var`, `let`, or `const` to declare variables.

- `var`: Function-scoped variable.
- `let`: Block-scoped variable.
- `const`: Block-scoped constant.

**Example:**

```javascript
var name = "Alice";
let age = 25;
const birthYear = 1995;
```

#### Data Types

- **String**: Text data. e.g., `"Hello"`
- **Number**: Numerical data. e.g., `42`
- **Boolean**: True or false. e.g., `true`
- **Object**: Complex data. e.g., `{ name: "Alice", age: 25 }`
- **Array**: List of values. e.g., `[1, 2, 3]`
- **Undefined**: Variable declared but not assigned. e.g., `let x;`
- **Null**: Explicitly no value. e.g., `let x = null;`

**Example:**

```javascript
let message = "Hello, world!";
let count = 42;
let isValid = true;
let person = { name: "Alice", age: 25 };
let numbers = [1, 2, 3, 4, 5];
let unknown;
let emptyValue = null;
```

#### Operators

- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`
- **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`
- **Comparison Operators**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Logical Operators**: `&&`, `||`, `!`

**Example:**

```javascript
let x = 10;
let y = 3;
console.log(x + y); // 13
console.log(x == "10"); // true
console.log(x === "10"); // false
```

---

### Control Structures

#### Conditional Statements

- `if`
- `else if`
- `else`
- `switch`

**Example:**

```javascript
let score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}
```

#### Loops

- `for`
- `while`
- `do...while`
- `for...in` (objects)
- `for...of` (arrays)

**Example:**

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);
```

---

### Functions

Functions are blocks of code designed to perform a task.

- **Function Declaration**
- **Function Expression**
- **Arrow Functions** (ES6)

**Example:**

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

const greet = function(name) {
  return `Hello, ${name}!`;
};
console.log(greet("Bob"));

const greet = (name) => `Hello, ${name}!`;
console.log(greet("Charlie"));
```

---

### Objects

Objects are collections of related data and functionality.

**Example:**

```javascript
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  start: function() {
    console.log("Car started");
  },
  drive: function() {
    console.log("Car is driving");
  }
};

console.log(car.make); // Toyota
car.start(); // Car started
car.drive(); // Car is driving
```

---

### Arrays

Arrays store multiple values in a single variable.

**Example:**

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Apple
fruits.push("Date");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Date"]
fruits.pop();
console.log(fruits); // ["Apple", "Banana", "Cherry"]
```

---

### Event Handling

JavaScript can respond to user actions using event listeners.

**Example:**

HTML:
```html
<button id="myButton">Click me</button>
<script src="script.js"></script>
```

JavaScript (`script.js`):
```javascript
document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});
```

---

### DOM Manipulation

The Document Object Model (DOM) represents the structure of a web page. JavaScript can manipulate the DOM to change content and style dynamically.

**Example:**

HTML:
```html
<div id="content">Original content</div>
<button onclick="changeContent()">Change Content</button>
<script src="script.js"></script>
```

JavaScript (`script.js`):
```javascript
function changeContent() {
  document.getElementById("content").innerHTML = "New content";
}
```

---

### Asynchronous JavaScript

Asynchronous JavaScript allows non-blocking operations using callbacks, promises, and async/await.

#### Callbacks

**Example:**

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = "Some data";
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log(data); // "Some data" after 1 second
});
```

#### Promises

**Example:**

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
    if (success) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  }, 1000);
});

promise
  .then((message) => {
    console.log(message); // "Operation successful"
  })
  .catch((error) => {
    console.error(error);
  });
```

#### Async/Await

**Example:**

```javascript
async function fetchData() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let data = await response.json();
  console.log(data);
}

fetchData();
```

---

### JavaScript Modules

Modules allow code to be split into reusable pieces.

#### Exporting Modules

**Example (exporting):**

```javascript
// file: math.js
export function add(a, b) {
  return a + b;
}
export const pi = 3.14159;
```

#### Importing Modules

**Example (importing):**

```javascript
// file: main.js
import { add, pi } from './math.js';

console.log(add(2, 3)); // 5
console.log(pi); // 3.14159
```

---

### Error Handling

Proper error handling is crucial for robust applications.

**Example:**

```javascript
try {
  let result = someFunction();
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("This runs regardless of the outcome.");
}
```

---

### JavaScript ES6+ Features

#### Template Literals

**Example:**

```javascript
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, Alice!"
```

#### Destructuring

**Example:**

```javascript
let [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

let person = { name: "Bob", age: 30 };
let { name, age } = person;
console.log(name); // "Bob"
console.log(age); // 30
```

#### Default Parameters

**Example:**

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet()); // "Hello, Guest!"
console.log(greet("Charlie")); // "Hello, Charlie!"
```

#### Spread and Rest Operators

**Example (spread operator):**

```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
```

**Example (rest operator):**

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22
```

---

### Advanced Array Methods

#### `forEach`

**Example:**

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach((fruit) => {
  console.log(fruit);
});
```

#### `map`

**Example:**

```javascript
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map((num)

 => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]
```

#### `filter`

**Example:**

```javascript
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

#### `reduce`

**Example:**

```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15
```

#### `find`

**Example:**

```javascript
let numbers = [1, 2, 3, 4, 5];
let firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // 2
```

#### `findIndex`

**Example:**

```javascript
let numbers = [1, 2, 3, 4, 5];
let firstEvenIndex = numbers.findIndex((num) => num % 2 === 0);
console.log(firstEvenIndex); // 1
```

---

### JavaScript Objects and Prototypes

#### Object Literals

**Example:**

```javascript
let person = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

console.log(person.name); // Alice
person.greet(); // Hello, my name is Alice
```

#### Constructor Functions

**Example:**

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

let bob = new Person("Bob", 30);
console.log(bob.name); // Bob
bob.greet(); // Hello, my name is Bob
```

#### Classes

**Example:**

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let charlie = new Person("Charlie", 35);
console.log(charlie.name); // Charlie
charlie.greet(); // Hello, my name is Charlie
```

#### Prototypes

**Example:**

```javascript
let animal = {
  type: "Mammal"
};

let dog = Object.create(animal);
dog.breed = "Golden Retriever";

console.log(dog.type); // Mammal (inherited from animal)
console.log(dog.breed); // Golden Retriever
```

---

### JavaScript Web APIs

#### DOM API

**Example:**

```javascript
document.getElementById("myElement").style.color = "blue";
```

#### Fetch API

**Example:**

```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

#### Storage API

**Example:**

```javascript
// Store data
localStorage.setItem("username", "Alice");

// Retrieve data
let username = localStorage.getItem("username");
console.log(username); // Alice

// Remove data
localStorage.removeItem("username");

// Clear all data
localStorage.clear();
```

---

### JavaScript and JSON

#### Parsing JSON

**Example:**

```javascript
let jsonString = '{"name": "Alice", "age": 25}';
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // Alice
```

#### Stringifying JSON

**Example:**

```javascript
let jsonObject = { name: "Alice", age: 25 };
let jsonString = JSON.stringify(jsonObject);
console.log(jsonString); // {"name":"Alice","age":25}
```

---

### JavaScript Debugging

#### Console

**Example:**

```javascript
console.log("This is a log message");
console.error("This is an error message");
console.warn("This is a warning message");
console.table([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]);
```

#### Breakpoints

**Example:**

```javascript
function add(a, b) {
  let result = a + b;
  debugger; // Pause execution here
  return result;
}

console.log(add(2, 3)); // 5
```

#### Error Handling

**Example:**

```javascript
try {
  let result = someFunction();
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("This runs regardless of the outcome.");
}
```

---

### JavaScript Performance Optimization

#### Minification

**Example:**

```javascript
// Original code
function add(a, b) {
  return a + b;
}

// Minified code
function add(a,b){return a+b}
```

#### Caching

**Example:**

```javascript
let cache = {};

function fetchData(url) {
  if (cache[url]) {
    return Promise.resolve(cache[url]);
  }
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      cache[url] = data;
      return data;
    });
}
```

#### Debouncing and Throttling

**Example (debouncing):**

```javascript
function debounce(fn, delay) {
  let timeoutID;
  return function(...args) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => fn.apply(this, args), delay);
  };
}

let resizeHandler = debounce(() => {
  console.log("Window resized");
}, 300);

window.addEventListener("resize", resizeHandler);
```

**Example (throttling):**

```javascript
function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    let now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

let scrollHandler = throttle(() => {
  console.log("Window scrolled");
}, 200);

window.addEventListener("scroll", scrollHandler);
```

---

### Advanced JavaScript Topics

---

### JavaScript Closures

A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.

**Example:**

```javascript
function outerFunction() {
  let outerVariable = "I am an outer variable";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

let closure = outerFunction();
closure(); // I am an outer variable
```

**Explanation:** `innerFunction` retains access to `outerVariable` even after `outerFunction` has finished executing.

---

### JavaScript Hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (script or function). Only declarations are hoisted, not initializations.

**Example:**

```javascript
console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted";

hoistedFunction(); // I am a hoisted function
function hoistedFunction() {
  console.log("I am a hoisted function");
}
```

**Explanation:** The variable `hoistedVar` is hoisted, but its initialization is not. The function `hoistedFunction` is hoisted entirely.

---

### JavaScript Strict Mode

Strict mode is a way to opt into a restricted variant of JavaScript, which helps catch common coding bugs and prevents the use of certain features.

#### Enabling Strict Mode

**Example:**

```javascript
"use strict";

let x = 3.14; // Valid
// y = 3.14; // Error: y is not defined
```

**Explanation:** In strict mode, assigning a value to an undeclared variable throws an error.

---

### JavaScript Design Patterns

Design patterns provide reusable solutions to common problems in software design.

#### Module Pattern

Creates a private scope and returns an object with public methods.

**Example:**

```javascript
let module = (function() {
  let privateVar = "I am private";

  function privateMethod() {
    console.log(privateVar);
  }

  return {
    publicMethod: function() {
      privateMethod();
    }
  };
})();

module.publicMethod(); // I am private
```

#### Revealing Module Pattern

Similar to the module pattern but explicitly maps public methods to private methods.

**Example:**

```javascript
let revealingModule = (function() {
  let privateVar = "I am private";

  function privateMethod() {
    console.log(privateVar);
  }

  function publicMethod() {
    privateMethod();
  }

  return {
    publicMethod: publicMethod
  };
})();

revealingModule.publicMethod(); // I am private
```

#### Singleton Pattern

Ensures a class has only one instance and provides a global point of access to it.

**Example:**

```javascript
let singleton = (function() {
  let instance;

  function createInstance() {
    let object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

let instance1 = singleton.getInstance();
let instance2 = singleton.getInstance();

console.log(instance1 === instance2); // true
```

#### Factory Pattern

Creates objects without specifying the exact class of the object that will be created.

**Example:**

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

function Bike(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

function VehicleFactory() {}

VehicleFactory.prototype.createVehicle = function(type, make, model, year) {
  switch (type) {
    case "car":
      return new Car(make, model, year);
    case "bike":
      return new Bike(make, model, year);
  }
};

let factory = new VehicleFactory();
let myCar = factory.createVehicle("car", "Toyota", "Corolla", 2020);
let myBike = factory.createVehicle("bike", "Yamaha", "FZ", 2021);

console.log(myCar); // Car { make: 'Toyota', model: 'Corolla', year: 2020 }
console.log(myBike); // Bike { make: 'Yamaha', model: 'FZ', year: 2021 }
```

#### Observer Pattern

Allows an object to notify other objects about changes in its state.

**Example:**

```javascript
function Subject() {
  this.observers = [];
}

Subject.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
  },
  unsubscribe: function(fn) {
    this.observers = this.observers.filter((observer) => observer !== fn);
  },
  notify: function(data) {
    this.observers.forEach((observer) => observer(data));
  }
};

let subject = new Subject();

function Observer1(data) {
  console.log("Observer 1: " + data);
}

function Observer2(data) {
  console.log("Observer 2: " + data);
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);

subject.notify("Hello Observers!"); // Observer 1: Hello Observers! \n Observer 2: Hello Observers!
```

---

### JavaScript Performance Optimization

#### Minification

Removes unnecessary characters from the code without changing its functionality.

**Example:**

```javascript
// Original code
function add(a, b) {
  return a + b;
}

// Minified code
function add(a,b){return a+b}
```

#### Caching

Stores data locally to reduce network requests.

**Example:**

```javascript
let cache = {};

function fetchData(url) {
  if (cache[url]) {
    return Promise.resolve(cache[url]);
  }
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      cache[url] = data;
      return data;
    });
}
```

#### Debouncing and Throttling

Limits the number of times a function is executed over time.

**Example (debouncing):**

```javascript
function debounce(fn, delay) {
  let timeoutID;
  return function(...args) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => fn.apply(this, args), delay);
  };
}

let resizeHandler = debounce(() => {
  console.log("Window resized");
}, 300);

window.addEventListener("resize", resizeHandler);
```

**Example (throttling):**

```javascript
function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    let now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

let scrollHandler = throttle(() => {
  console.log("Window scrolled");
}, 200);

window.addEventListener("scroll", scrollHandler);
```

---

### JavaScript Testing

Testing is crucial for ensuring that your code works correctly. Popular testing frameworks for JavaScript include Jest, Mocha, and Jasmine.

#### Writing Tests

**Example (Jest):**

```javascript
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

**Explanation:** This is a simple test for a sum function using Jest. The test checks if `sum(1, 2)` returns `3`.

#### Running Tests

To run the tests, you typically use a command in the terminal:

```bash
jest
```

---

### JavaScript Tools and Build Systems

Build tools help automate tasks like minification, transpilation, and bundling.

#### Webpack

Webpack is a popular module bundler for JavaScript applications.

**Example (webpack.config.js):**

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
```

**Explanation:** This configuration file tells Webpack to bundle the JavaScript files starting from `src/index.js` into `dist/bundle.js` and use Babel to transpile the code.

#### Babel

Babel is a JavaScript transpiler that allows you to use the latest JavaScript features.

**Example (.babelrc):**

```json
{
  "presets": ["@babel/preset-env"]
}
```

**Explanation:** This configuration file tells Babel to use the `@babel/preset-env` preset, which allows you to use modern JavaScript features.

---

### JavaScript Frameworks and Libraries

Frameworks and libraries provide pre-written code to help you build applications more efficiently.

#### React

React is a popular JavaScript library for building user interfaces.

**Example:**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Hello, world!</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));
```

**Explanation:** This code defines a simple React component and renders it to the DOM.

#### Angular

Angular is a platform for building mobile and desktop web applications.

**Example:**

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',


  template: `<h1>Hello, world!</h1>`
})
export class AppComponent {}
```

**Explanation:** This code defines a simple Angular component that displays "Hello, world!".

#### Vue.js

Vue.js is a progressive JavaScript framework for building user interfaces.

**Example:**

```javascript
<template>
  <div id="app">
    <h1>Hello, world!</h1>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}
</style>
```

**Explanation:** This code defines a simple Vue component that displays "Hello, world!".

---

