// --------- Day 03 : Interfaces and Type Aliases

// interface User → blueprint for objects
// “Ek object ke andar kaun-kaun se properties hongi, unka type kya hoga, aur kya cheeze required ya optional hongi.”
// Har property ka type fixed hai
// Agar object me extra ya missing property → compile-time error

interface User {
    name: string;
    age: number;
    role: string
}

const user:User = {
    name: 'Hamza',
    age: 30,
    role: 'Front End Engineer'
}
console.log(user.role);

// same isme bh Optional Properties rkh skte ho (?)

// readonly ka matlab: Ek property ko sirf read kar sakte ho, change nahi kar sakte.
// Matlab value set hogi sirf ek baar (initial time per) Uske baad change karne ki koi bhi koshish ❌ error de degi.

interface Product {
    readonly id: number;
    name: string;
    price: number
}
const produtc:Product = {
    id:1,
    name:'bag',
    price:1200
}
// produtc.id = 2 Cannot assign to 'id' because it is a read-only property.

// Interface Extends = ek interface kisi doosre interface ki sari properties + apni nayi properties ko combine kar leta hai.
// Base Interface
interface Person {
    name: string;
    age: number
}

// New Interface
interface Employee extends Person {
    salary: number
}

const emp1 : Employee = {name:'Hamza',age:12,salary:250000}
const emp2 : Employee = {name:'Zaid',age:20,salary:150000}
console.log(emp1);
console.log(emp2);

// Function kai liye bh Interface define krkste ho
interface MathOperation {
    (a: number, b: number): number;
}

const multiply: MathOperation = (x, y) => x * y;
console.log(multiply(5,3));  

// Type Alias : “Ek custom type bana lo jiski jagah bar-bar reuse kar sako.” bilkul Interface jesa
// type ID:number ab jaha bh id ko use krogai number type aram se refer hojai ga

type Fruits = {
    name:string;
    price:number
}
const fruit:Fruits = {name:'apple',price:100}

// 🟣 Type Alias ka sabse bada power — union types
// Interface union types nahi support karta lekin Type Alias karta hai.
type Status = "success" | "failed" | "error"
let s1:Status = "success"
s1 = "failed"

// Intersection me combine ka kaam krega

// Ye object, union, function, array — sabka type banane me use hoskta hai.

// 🔥 Day 3 Practice Tasks

// Task 1:
// Interface Book → { title: string; author: string; pages?: number }
// Create 2 book objects

interface Book {
    title: string;
    author: string;
    pages?: number
}

let book1:Book = {title:'Book One',author:'Hassan Sajid',pages:120}
let book2:Book = {title:'Book Two',author:'Hafiz Hamza'}

// Task 2:
// Type alias Score → number | string
// Create a variable and assign both types

type Score = number | string
let score:Score = 120
score = "12"