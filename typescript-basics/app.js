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
var age = 12;
var isMarried = true;
var userName = 'Hamza';
console.log(userName, age, isMarried);
// dont use any type qkai ye js ki trah hai ap kuch bh isme store krkste ho
var data = 12;
// Array Types
var fruits = ['apple', 'banana', 'grapes'];
var numbers = [12, 34, 35];
// OBJECT Types (Full Control)
var student = {
    name: 'Zaid',
    age: 23,
    role: 'Dev'
};
console.log(student);
