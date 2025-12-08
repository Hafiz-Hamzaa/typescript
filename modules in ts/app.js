"use strict";
// 🟦 Modules in TypeScript (Super Easy Explanation)
// Modules hotay kya hain?
// Jab code zyada bada ho jaye, hum usko alag-alag files me tod dete hain.
// Har file → ek module hota hai.
Object.defineProperty(exports, "__esModule", { value: true });
// export karte hain → kisi file se cheeze bahar dene ke liye
// import karte hain → kisi file me use karne ke liye
// Named Export : multiple cheeze aik hi file se export krna
// Default Export : just aik chez export krna single file se
var math_1 = require("./math");
var math_2 = require("./math");
console.log((0, math_1.add)(12, 20));
console.log((0, math_1.sub)(50, 30));
console.log(math_2.default);
