// Day 02 : Functions in TS
// Basic Function with Typed Parameters & Return Type
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 20));
// Optional Parameter
function greeting(name, age) {
    if (age) {
        return "Hello ".concat(name, " your age is ").concat(age);
    }
    else {
        return "Hello ".concat(name);
    }
}
console.log(greeting("Hamza"));
console.log(greeting("Zaid", 25));
// Functions Returning Arrays
function calcAvg(arr) {
    var count = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var val = arr_1[_i];
        count += val;
    }
    var avg = count / arr.length;
    return avg;
}
var result = calcAvg([10, 20, 30, 40, 50]);
console.log("Avg of five student number shoul be : ".concat(result));
// Functions Returning Objects
function createUser(name, age) {
    return { name: name, age: age };
}
console.log(createUser("Umer", 30));
// // 🔥 Day 2 Practice Tasks
// Task 1:
// Function subtract → 2 numbers pass karo, difference return kare
function subtract(a, b) {
    return a - b;
}
console.log((subtract(20, 10)));
// Task 2:
// Function fullName → firstName + lastName (optional middleName) return kare
function fullName(firstName, lastName, middleName) {
    return "".concat(firstName, " ").concat(lastName);
}
console.log(fullName('Muhammad', "Hamza"));
// Task 3:
// Arrow function square → number pass karo, square return kare
var square = function (num) {
    return Math.pow(num, 2);
};
console.log(square(12));
// Task 4:
// Function createProduct → return type { name: string; price: number; inStock: boolean }
function createProduct(name, price, inStock) {
    return { name: name, price: price, inStock: inStock };
}
console.log(createProduct("Ayesha", 1400, true));
