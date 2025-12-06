// Day 02 : Functions in TS
// Basic Function with Typed Parameters & Return Type
function sum(a:number,b:number):number {
    return a+b
}
console.log(sum(12,20));

// Optional Parameter
function greeting(name:string,age?:number):string {
    if(age){
        return `Hello ${name} your age is ${age}`;
    }else{
        return `Hello ${name}`;
    }
}
console.log(greeting("Hamza"));
console.log(greeting("Zaid",25))

// Functions Returning Arrays
function calcAvg(arr:number[]):number {
    let count:number = 0
    for(let val of arr){
        count+= val
    }
    let avg:number = count / arr.length
    return avg;
}
let result = calcAvg([10,20,30,40,50])
console.log(`Avg of five student number shoul be : ${result}`);

// Functions Returning Objects
function createUser(name:string,age:number): {name:string,age:number} {
    return {name,age}
}
console.log(createUser("Umer",30));

// // 🔥 Day 2 Practice Tasks
// Task 1:
// Function subtract → 2 numbers pass karo, difference return kare
function subtract(a:number,b:number): number {
    return a - b
}
console.log((subtract(20,10)));

// Task 2:
// Function fullName → firstName + lastName (optional middleName) return kare
function fullName(firstName:string , lastName:string ,  middleName?:string ):string {
    return `${firstName} ${lastName}`
}
console.log(fullName('Muhammad',"Hamza"));

// Task 3:
// Arrow function square → number pass karo, square return kare
const square = (num:number):number => {
    return num ** 2
}
console.log(square(12))

// Task 4:
// Function createProduct → return type { name: string; price: number; inStock: boolean }
function createProduct(name:string,price:number,inStock:boolean): {name:string;price:number;inStock:boolean} {
    return {name,price,inStock}
}
console.log(createProduct("Ayesha",1400,true))