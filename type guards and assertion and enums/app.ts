// -------- Day 06 : Type Guards and Type Assertion
// 🟩 ✔ Type Assertion kya hota hai?
// Jab TypeScript ko type ka pata na ho, lekin tumhe pata ho → tum usko FORCE karte ho
// Ye Type Assertion hota hai.

let value:any = "Hamza"
let len = (value as string).length

let otherValue:unknown = 100
let add = otherValue as number
console.log(add + 10);

// 🟦 What Are Type Guards? (Super Easy Explanation)
// Type Guard = Condition laga kar TypeScript ko batana ke “Iss block ke andar ye variable is type ka hai.”
// Yani hum check karte hain,TypeScript confirm karta hai.
// Tum if-condition se type ko guard karte ho, isliye isko type guard kehte hain.
function printVlaue(value:string | number) {
    if(typeof value === "string"){
        console.log(value.toUpperCase());
    }else{
        console.log(value + 100)
    }
}
printVlaue("python")

// 🔥 ENUMS kya hotay hain? (Super Easy Explanation)
// Enum = Ek dabba jisme FIXED values rakhi hoti hain.
// Tumne wo dabba ka naam rakh diya, ab uske andar ki values ko baar-baar use kar sakte ho.

// string enum
enum OrderStatus {
    Pending = "pending",
    Delivered = "delivered",
    Cancelled = "cancelled"
}

function checkStatus(status:OrderStatus) {
    console.log("Order :", status)
}
checkStatus(OrderStatus.Pending)
checkStatus(OrderStatus.Cancelled)