//*************** if - else ***************

// Check if the number is positive or negative
let a = 20;
if (a >= 1) {
    console.log("Number is Positive")
}
else {
    console.log("Number is Negative")
}

//*************** if - else if ***************

// Grade system
let marks = 76;
let grade;

if (marks >= 90) {
    grade = "A";
}
else if (marks >= 75 && marks < 90) {
    grade = "B";
}
else if (marks >= 60 && marks < 75) {
    grade = "C";
}
else {
    grade = "FAIL"
}

console.log(grade);


//*************** switch ***************

//let dayNumber = new Date().getDay(); // For today's day number
let dayNumber = 0;

switch (dayNumber) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Sunday";
}

console.log(day);