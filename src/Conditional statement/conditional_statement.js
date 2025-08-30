// if/ if else/ else if

const age = 21;
if (age > 18) {
  console.log("enjoy your video");
} else {
  console.log("You can not watch this video");
}

// switch case
const score = 8;
switch (true) {
  case score >= 8 && score <= 10:
    console.log("Giỏi");
    break;
  case score >= 6 && score < 8:
    console.log("Khá");
    break;
  case score >= 5 && score < 6:
    console.log("Trung bình");
    break;
  default:
    console.log("Yếu");
}

// break
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// continue
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
