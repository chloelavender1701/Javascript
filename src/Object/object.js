console.log("Object");

// key: value
const sv1 = {
  score: 9,
  name: "Chloe",
  address: {
    city: "TPHCM",
    country: "Viet Nam",
  },
};

const sv2 = {
  score: 8,
  name: "Nguyen Van B",
  address: {
    city: "Ha Noi",
    country: "Viet Nam",
  },
};

const sv = [sv1, sv2];
console.log(sv);

// get and set data
console.log("get and set data");

const person = {
  name1: "Chloe",
  age: 21,
};

// get data
console.log("age:", person.age);

// set data

console.log("person before:", person);

person.address = "TPHCM";

console.log("person after:", person);

// delete
delete person.name1;
console.log("person after delete:", person);

// loop object
console.log("loop object");

const student1 = {
  username: "Chloe",
  score: 9.6,
};

const student2 = {
  username: "Minh Anh",
  score: 3,
};

const student3 = {
  username: "Phuc An",
  score: 5,
};

const student = [student1, student2, student3];

student.forEach((item, index) => {
  console.log(`index = ${index}, name = ${item.username}`);
});

// for in
console.log("for in");
for (let key in student1) {
  console.log(`key = ${key}, value = ${student1[key]}`);
}

// for of
console.log("for of");
for (let value of Object.values(student1)) {
  console.log("value = ", value);
}
