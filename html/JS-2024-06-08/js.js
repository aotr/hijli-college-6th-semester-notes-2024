console.log('Hello');

// function greet(name) {
//     return `Hello, ${name}!`;
// }
//   console.log(greet("Alice"));
  
//   var greet = function(name) {
//     return `Hello, ${name}!`;
//   };
//   console.log(greet("Bob"));
  
//   const greet = (name) => `Hello, ${name}!`;
//   console.log(greet("Charlie"));


let car = [{
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    start: function() {
      console.log("Car started");
    },
    drive: function() {
      console.log("Car is driving");
    }
},
{
    make: "KIA",
    model: "Jio",
    year: 2023,
    start: function() {
      console.log("Car started");
    },
    drive: function() {
      console.log("Car is driving");
    }
  }];
//car[0].make

    document.querySelector("#name").innerHTML = car[0].make;    


//   console.log(car[0].make); 
//   console.log(car[1].make); 
//   console.log(car[0].model); 
//   console.log(car[1].model); 
//   car[0].start();
// car[1].drive();
  

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Apple
fruits.push("Date");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Date"]
fruits.pop();
console.log(fruits); // ["Apple", "Banana", "Cherry"]

document.querySelector("#myButton").addEventListener("click", function () { 
    confirm('Amak amer moto thakte dao');

});