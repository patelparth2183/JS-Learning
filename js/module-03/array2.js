//forEach///////////////////////////////
const arr = [10, 20, 30, 40, 50];

const arrReturn = arr.forEach(function (item, index) {
    console.log(item + index);
})

console.log("break"); ///////////////////////////////

//map///////////////////////////////
const arr2 = [10, 20, 30, 40, 50];

const map = arr2.map(function (item, index) {
    return item*item;
})

console.log(map);

const newMap = arr2.map(x => x*x);
console.log("New map is", newMap);

console.log("break"); ///////////////////////////////

const cube = [1, 2, 3, 4, 5];

const cubemap = cube.map(function(item, index) {
    return item**3;
})

console.log(cubemap);

console.log("break"); ///////////////////////////////

//filter///////////////////////////////
let fil = [1, 3, 5, 7, 9];

function dfil(fil) {
    let out = fil.map(function(item, index) {
        return item * 2;
    })
    .filter(function(item,index) {
        if (item >= 10) {
            return true;
        }
        else {
            return false;
        }
    })

    return out;
}

console.log(dfil(fil));

const newFil = fil.filter(item => item>5);
console.log("Grater than 5 is", newFil);

console.log("break"); ///////////////////////////////

//reduce///////////////////////////////
const arr3 = [1,5,6,4,8,2,15,13,17];

const outputOfSum = arr3.reduce(function (accu, curr) {
    return accu + curr;
}, 0)
console.log("Output of sum isFinite", outputOfSum);

const maxValue = arr3.reduce (function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max
}, 0)

console.log("Output of Max value is", maxValue);

console.log("break"); ///////////////////////////////

//every///////////////////////////////
const everyLessTen = arr3.every(arr => arr < 10); //15,13,17
console.log("everyLessTen", everyLessTen);

//some///////////////////////////////
const someLessTen = arr3.some(arr => arr < 10); //1,5,6,4,8,2
console.log("someLessTen", someLessTen);

//find///////////////////////////////
const findEven = arr3.find(num => num%2 == 0);
console.log("findEven", findEven);

//findLast///////////////////////////////
const findLastEven = arr3.findLast(num => num%2 == 0);
console.log("findLastEven", findLastEven);

//findIndex///////////////////////////////
const findIndexEven = arr3.findIndex(num => num%2 == 0);
console.log("findIndexEven", findIndexEven);

//findLastIndex///////////////////////////////
const findLastIndexEven = arr3.findLastIndex(num => num%2 == 0);
console.log("findLastIndexEven", findLastIndexEven);

console.log("break"); ///////////////////////////////

// object method///////////////////////////////
const students = [
    {
        fullName: "Parth",
        gender: "Male",
        marks: 95,
    },
    {
        fullName: "Shivani",
        gender: "Female",
        marks: 96,
    },
    {
        fullName: "Sam",
        gender: "Male",
        marks: 87,
    },
    {
        fullName: "Shivu",
        gender: "Female",
        marks: 72,
    }
]

//map///////////////////////////////
const mapName = students.map(student => student.fullName);
console.log(mapName);

//filter///////////////////////////////
const filterMore = students.filter(function (students) {
    return students.marks>85;
});
console.log(filterMore);

//Chaining///////////////////////////////
const addingMarks = students.map(students => {
    if (students.marks < 90) {
        students.marks += 4;
    }
    return students;
})
console.log("addingMarks is", addingMarks);
    
const finalStudents = addingMarks.filter(function (students) {
    return students.marks >= 90;
});
console.log("finalStudents is", finalStudents);

const totalMarks = finalStudents.reduce(function(total, curr) {
    total = total + curr.marks;
    return total
}, 0)

console.log("Total Marks is", totalMarks);