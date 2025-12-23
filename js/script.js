// Taking 5 subjects marks using prompt
let subject1 = Number(prompt("Enter marks for Subject 1:"));
let subject2 = Number(prompt("Enter marks for Subject 2:"));
let subject3 = Number(prompt("Enter marks for Subject 3:"));
let subject4 = Number(prompt("Enter marks for Subject 4:"));
let subject5 = Number(prompt("Enter marks for Subject 5:"));

// Calculating total marks
let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;

// Calculating average marks
let averageMarks = totalMarks / 5;

// Grade calculation using if-else
let grade;

if (averageMarks >= 90) {
    grade = "A+";
} else if (averageMarks >= 80) {
    grade = "A";
} else if (averageMarks >= 70) {
    grade = "B";
} else if (averageMarks >= 60) {
    grade = "C";
} else if (averageMarks >= 50) {
    grade = "D";
} else {
    grade = "F";
}

// Displaying results using alert
alert("Total Marks: " + totalMarks +"\nAverage Marks: " + averageMarks +"\nGrade: " + grade);
