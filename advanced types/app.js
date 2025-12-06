// ---------- Day 04 : Advance Types in TS
var userId = 12;
userId = "12";
userId = true;
var firstEmployee = {
    name: "Hamza",
    age: 10,
    id: 12,
    salary: 12000
};
console.log(firstEmployee);
var s1 = "success";
s1 = "failed";
// Null Undefined Handling in TS
function greet(name) {
    if (name) {
        console.log("Hello ".concat(name));
    }
    else {
        console.log("Hello Guest");
    }
}
greet("Qasim");
greet(null);
// Type Narrowing → TypeScript ko pata lagta hai variable ka exact type kis waqt kya hai, taake aap safe operations kar saken.
var value = 12;
if (typeof value === "string") {
    console.log("Value of Types is String");
}
else {
    console.log("Value of Types is Number");
}
// Task 1:
// Function formatId → accept string | number
// If number → ID: <number>
// If string → ID String: <string>
function printID(id) {
    if (typeof id === "string") {
        console.log("Id is string", id);
    }
    else {
        console.log("ID is number", id);
    }
}
printID(12);
var obj1 = { success: true };
var obj2 = { success: false, data: ["hamza", "umer", "hassan"] };
console.log(obj2);
