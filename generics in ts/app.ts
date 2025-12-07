// // ---------- Day 05 : Generics in TS
// 🔹 Generic simple definition
// ✔ Ek hi function har type ke liye kaam kare
// ✔ Lekin type safety bhi rahe (any ki tarah unsafe nahi)
// ✔ Call karte waqt tum decide karo ke type kya hoga
// Note : any use nh krna qkai type safety khtam hojati hai

// Basic Generics in Function
function identity<T>(value: T): T {
  return value;
}
console.log(identity<number>(12));
console.log(identity<string>("Hamza"));
console.log(identity<{ role: string }>({ role: "Engineer" }));

// Generics with Arrays
function getArr<T>(arr: T[]): T[] {
  return arr;
}
console.log(getArr<number>([12, 2, 78, 30]));
console.log(getArr<string>(["hamza", "owais", "uzair"]));
console.log(getArr<string | number | boolean>(["react", "js", 12, 45, true]));

// Array<T> basically array ka type dynamic banata hai — tum jo type bhejo, array usi ko follow karega. (same treated as Objects)

// 🟦 Generics with Constraints
// Generic = koi bhi type chalega
// Constraint = koi bhi type mat do, sirf woh do jo condition follow kare

function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}
printName({ name: "Hamza", age: 20 });
// printName({ age: 20 }); error qkai type koi bh ho but object me name property hona zaroori hai