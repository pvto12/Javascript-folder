//Assignment on Students grade Manager
const students = [{name:"julius", score:78},
 {name:"jude", score:55},
 {name:"hope", score:88},
 {name:"david", score:60},
 {name:"imogen", score:48},
];

//map()

const studentNames = students.map(students => students.name);
console.log("Student Names:", studentNames);

// filter() 
const passedStudents = students.filter(students => students.score >= 50);
console.log("Students who passed:", passedStudents);

// reduce()
const totalScore = students.reduce((sum, students) => sum + students.score, 0);
const averageScore = totalScore / students.length;
console.log("Average Score:", averageScore);

// For loop
for (let i = 0; i < students.length; i++){
    console.log("Name: " + students[i].name + ", Score: " + students[i].score);
}

// if...else 
for (let i = 0; i < students.length; i++) {
let grade;
let score = students[i].score;

if (score >= 80) {
    grade = "A"
} else if (score >= 70) {
    grade = "B"
} else if (score >= 60) {
    grade = "C"
} else if (score >= 50) {
    grade = "D"
} else {
    grade = "F"
}
console.log("Name: " + students[i].name + ", Score: " + score + ", Grade: " + grade);}


