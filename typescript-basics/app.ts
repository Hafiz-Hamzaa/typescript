// TypeScript Introduction
// TypeScript (TS) JavaScript ka superset hai.
// Matlab: JavaScript valid code TypeScript me bhi chalega, lekin TypeScript extra features provide karta hai.
// Sabse bada feature: Static typing.
// JavaScript me aapko type ka pata run time pe chalti hai.
// TypeScript me aap compile time pe type errors dekh sakte ho.

// 2. TypeScript Advantages
// Type Safety – Error run time pe nahi, compile time pe milta hai.
// let age: number = 25;
// age = "25"; // Error: Type 'string' is not assignable to type 'number'

// Better IDE Support – VSCode me autocomplete, hints, aur refactoring easy ho jati hai.
// Large Projects me Maintainability – Types aur interfaces se code readable aur scalable hota hai.
// Object-Oriented Features – Classes, interfaces, generics ka strong support.

// ---------- Day 01 : Typescript Basics
// TypeScript install & setup
// npm i -g typescript and check version tsc -v || tsc --init create tsconfig.json || create a file app.ts  || run cmd tsc app.ts and node app.js for output

// Basic Types samajhna
// Arrays + Objects strict types ke saath
// Practice tasks

// BASIC TYPES (Foundation of TS)
let age: number = 12;
const isMarried: boolean = true;
var userName: string = "Hamza";
console.log(userName, age, isMarried);

// dont use any type qkai ye js ki trah hai ap kuch bh isme store krkste ho
let data: any = 12;

// Array Types
let fruits: string[] = ["apple", "banana", "grapes"];
let numbers: number[] = [12, 34, 35];

// OBJECT Types (Full Control)
const student: { name: string; age: number; role: string } = {
  name: "Zaid",
  age: 23,
  role: "Dev",
};
console.log(student);
console.log(student.name);
console.log(student["role"]);

// Optional Properties (?)
const obj: { name: string; age?: number } = {
  name: "Uzair",
};

// PRACTICE (Do it yourself)
let productName: string = "pencil";
let price: number = 20;
let vegetables: string[] = ["carrots", "onion", "potato", "ladyfinger"];
const car: { name: string; model: number; isElectric: boolean } = {
  name: "Civic",
  model: 2020,
  isElectric: false,
};


// ------------- Day 01 Completed