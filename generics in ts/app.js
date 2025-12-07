// // ---------- Day 05 : Generics in TS
// 🔹 Generic simple definition
// ✔ Ek hi function har type ke liye kaam kare
// ✔ Lekin type safety bhi rahe (any ki tarah unsafe nahi)
// ✔ Call karte waqt tum decide karo ke type kya hoga
// Note : any use nh krna qkai type safety khtam hojati hai
// Basic Generics in Function
function identity(value) {
    return value;
}
console.log(identity(12));
console.log(identity("Hamza"));
console.log(identity({ role: "Engineer" }));
// Generics with Arrays
function getArr(arr) {
    return arr;
}
console.log(getArr([12, 2, 78, 30]));
console.log(getArr(['hamza', 'owais', 'uzair']));
console.log(getArr([true]));
