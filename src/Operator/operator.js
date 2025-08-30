let a = 5;
const b = a--;
console.log("a = ", a);
console.log("b = ", b);
const c = --a;
console.log("a = ", a);
console.log("c = ", c);

const d = "5";
a = 5;
console.log(d == a); // true
console.log(d === a); // false

// Template Literals
const name = "Chloe";
const age = 21;
const intro = `My name is ${name} and I'm ${age} years old.`;
console.log(intro);
