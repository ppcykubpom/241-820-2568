/*
array
*/
/*
let a = 10
let b = 20
let c = 30
console.log('a :',a,'b :',b,'c :',c)
let ages = [10,20,30] //array 3 items
console.log('ages :',ages)
console.log('ages[1] :', ages[1])

//1. แทนที่ ค่าข้อมูลใน array
ages = [15,25]
console.log('ages list :', ages)
//2. ต่อ array
ages.push(35)
console.log('ages after push :', ages)
//3. ลบข้อมูลตัวสุดท้ายใน array
ages.pop()
console.log('ages after pop :', ages)
*/

/*
let ages = [25, 30, 35, 40, 45]

if(ages.includes(30))
console.log('Ages',ages)

let fruits = ['apple', 'banana', 'cherry']
console.log('Fruits',fruits)
fruits.log('mango')
console.log('Fruits:',fruits)
console.log('First fruits :',fruits.length)

for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit at index ${i}:`,fruits[i])
}

/*
object
let student = [{
    age: 30,
    name: "John",
    grade: 'A'
}, {
    age: 25,
    name: "Jane",
     grade: 'B'
}]
for (let i = 0; i < student.length; i++) {
     console.log("Stident " + (i + 1) + ":");
    console.log("Name: " + student[i].name);
    console.log("Age: "+ student[i].age);
    console.log("Grade: " + student[i].grade);
}

student.push({
    age: 28,
    name: "Mike",
    grade: 'C'
})
console.log("Added new student:", student[student.length - 1])

student.pop();
console.log("removed last student. Current students:",student)
*/

/*
function


let score1 = 10
let score2 = 80

function calculation_grade(score){
  if (score1 >= 80 ){
    grade = 'A'
  } else if (score >= 70){
    grade = 'B'
  } else if (score >= 60){
    grade = 'C'
  } else if (score >=50 ){
    grade = 'D'
  } else {
    grade = 'F'
  }
  return grade 
}
let grade1 = calculation_grade(score1)
let grade2 = calculation_grade(score2)
console.log('Score1:' +score1,'Grade1:',grade1)
console.log('Score1:' +score2,'Grade2:',grade2)
*/

/*
array


let scores = [90, 80, 70, 60, 50];
for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i + 1} : ${scores[i]}`);
}

scores = scores.map((s) => {
    return s - 10;
})


scores.forEach((s) => {
    console.log('score:',s) 
    //console.log(`Score: ${s}`)  
})
// map,filter
*/

/*
let scores = [90, 80, 70, 60, 50];

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i])
}

let newScores = scores.filter(function(score){
    return score >= 70;
})

newScores.forEach((ns) => {
    console.log('new scores: ' + ns);
})
*/

/*
object funtions
*/

let students = [
    {name: "John", age: 20, grade: "A"},
    {name: "Jane", age: 22, grade: "B"},
    {name: "Jim", age: 21, grade: "C"},
]
console.log('Student',students[0]);

let student = students.find((s)=> {
    if (s.name === "Jane") {
        return true;
    } else {
        return false;
    }
})

let dubblescoreStudents = students.map((s => {
    s.age = s.age * 2;
    return s;
}));
let highGradeStudents = students.filter((s => {
    return s.grade === "A"
}));


console.log('Found Student',student);
console.log('Dubble Score Students',dubblescoreStudents)
console.log('High Grade Students',highGradeStudents)