console.log("Function");

function greeting() {
  console.log("Hello everyone");
}

greeting();

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 9));

// arrow function
const sumArrow = (a, b, c) => {
  return a + b + c;
};
console.log(sumArrow(1, 1, 4));

// scope
console.log("Scope");
let globalVar = "Global variable";
function show() {
  console.log(globalVar);
}
show();
console.log(globalVar);

function show2() {
  let localVar = "Local variable";
  console.log(localVar);
}
show2();
// console.log(localVar);
