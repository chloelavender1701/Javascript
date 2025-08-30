const fullName = "My Duyen";
const birthYear = 2004;
isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();
console.log(currentYear, typeof currentYear);

const age = currentYear - birthYear;

console.log(`
Tên: ${fullName}
Tuổi: ${age}
Sinh viên: ${isStudent}
    `);
