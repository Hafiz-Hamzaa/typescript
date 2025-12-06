// ---------- Day 04 : Advance Types in TS

// 1️⃣ Union Types : Union type → variable ek ya zyada types le sakta hai
type ID = string | number | boolean
let userId:ID = 12
userId = "12"
userId = true
// invalid type dosent exist userId = []  

// 2️⃣ Intersection Types : Intersection (&) → multiple types ko combine karta hai
type Person = {name:string; age:number}
type Employee = {id:number; salary: number}
type EmployeePerson = Person & Employee

const firstEmployee:EmployeePerson = {
    name:"Hamza",
    age:10,
    id:12,
    salary:12000
}
console.log(firstEmployee);

// 3️⃣ Literal Types: Fixed value ka restriction
type Staus = "success" | "failed" | "pending"
let s1:Staus = "success"
s1 = "failed"

// Null Undefined Handling in TS
function greet(name:string | null) {
    if(name){
        console.log(`Hello ${name}`)
    }else{
        console.log("Hello Guest")
    }
}
greet("Qasim")
greet(null)

// Type Narrowing → TypeScript ko pata lagta hai variable ka exact type kis waqt kya hai, taake aap safe operations kar saken.
let value : number | string = 12
if(typeof value === "string"){
    console.log("Value of Types is String")
}else{
    console.log("Value of Types is Number")
}

// Task 1:
// Function formatId → accept string | number
// If number → ID: <number>
// If string → ID String: <string>

function printID(id:number | string) {
    if(typeof id === "string"){
        console.log("Id is string", id)
    }else{
        console.log("ID is number", id)
    }
}
printID(12)

// Task 4:
// Create type Result = { success: boolean } & { data?: string[] }
// Create 2 objects with success true/false
// Include optional data array

type Result = {success:boolean} & {data?:string[]}
let obj1:Result = {success:true}
let obj2:Result = {success:false,data:["hamza","umer","hassan"]}
console.log(obj2);