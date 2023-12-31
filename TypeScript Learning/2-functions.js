"use strict";
//compiler implicitly knows the function return type but it is better to give a return type
function add1(a, b) {
    return a + b;
}
let result1 = add1(4, 5);
// console.log(result1);
function add2(num1, num2) {
    return num1 + num2;
}
let result2 = add2(4, 6);
//console.log(result2);
//arrow function
const arraowFun = (num1, num2) => num1 + num2;
//console.log(arraowFun(3, 5));
//optional parameters= We use optional parameters when it's not mandatory for that parameter to have a value or to be specified
const fun1 = function (num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
};
//console.log(fun1(4, 5));
//console.log(fun1(4, 5, 6));
//required parameters   = set a default value for the parameter, If the value if not given to the value default value comes , If the user enteer a a value to the parameter it becomes the value
const fun2 = function (num1, num2, num3 = 10) {
    return num1 + num2 + num3;
};
//console.log(fun2(4, 5));
//console.log(fun2(4, 5, 6));
//Rest  parameter = TypeScript introduced rest parameters to accommodate n number of parameters easily.
//When the number of parameters that a function will receive is not known or can vary, we can use rest parameters
function Greet(greeting, ...names) {
    return greeting + " " + names.join(", ") + "!";
}
//console.log(Greet("Hello", "Steve", "Bill")); // returns "Hello Steve, Bill!"
//console.log(Greet("Hello")); // returns "Hello !"
//generics
function getItems(items) {
    return new Array().concat(items);
}
//Type is implicitly detemined
let array1 = getItems([4, 5, 2, 5, 2, 8]);
console.log(array1);
let array2 = getItems(["Kavindu", "Gihan", "Dharmasiri"]);
console.log(array2);
