// 🟦 Modules in TypeScript (Super Easy Explanation)
// Modules hotay kya hain?
// Jab code zyada bada ho jaye, hum usko alag-alag files me tod dete hain.
// Har file → ek module hota hai.

// export karte hain → kisi file se cheeze bahar dene ke liye
// import karte hain → kisi file me use karne ke liye

// Named Export : multiple cheeze aik hi file se export krna
// Default Export : just aik chez export krna single file se

import {add,sub} from "./math"
import userName from "./math";

console.log(add(12,20));
console.log(sub(50,30));
console.log(userName)