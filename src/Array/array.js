console.log("Array");

const names = ["My Duyen", "Minh Anh", "Phuc An", "Gia Huy"];

console.log(names);
console.log(names[0]);

names[2] = "New Name";
console.log(names);

names.push("Chloe");
names.unshift("New Start");
console.log("names after push and unshift");
console.log(names);
names.pop();
names.shift();
console.log("names after pop and shift", names);

// for

const myClass = ["My Duyen", "Minh Anh", "Phuc An", "Gia Huy"];
console.log(myClass, myClass.length);
for (let i = 0; i < myClass.length; i++) {
  console.log(`i = ${i} and value= ${myClass[i]}`);
}

// for each
console.log("for each");
myClass.forEach((value, index) => {
  console.log(`index = ${index} and value= ${value}`);
});

// map
console.log("map");
const scores = [5, 6, 7, 8, 9];

const scorex2 = scores.map((value, index) => {
  return value * 2;
});

const otherScorex2 = scores.map((value, index) => value * 2);

console.log("scores after map", scorex2);
console.log("scores after otherScorex2", otherScorex2);

// filter
console.log("filter");
const ages = [15, 17, 19, 21, 25, 30];
const agesGreaterThan18 = ages.filter((item, index) => {
  return item > 18;
});
console.log("agesGreaterThan18", agesGreaterThan18);
