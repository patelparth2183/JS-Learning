// Write a JavaScript function processArray(arr) that takes an array of numbers as input and performs the following tasks:

// Use sort() to sort the array in ascending order.
// Use reverse() to reverse the sorted array.
// Use Math.max() to find the maximum value in the array.
// Use Math.min() to find the minimum value in the array.
// Use the concept of creating a sorted copy of the array (tosorted()).
console.log("1st");
function processArray(a) {
    const sortedArray = a.sort();
    console.log(sortedArray);

    const reversedArray = sortedArray.reverse();
    console.log(reversedArray);

    console.log(Math.max(...a));

    console.log(Math.min(...a))

    // const sortedNew = a.toSorted();
    // console.log(sortedNew);

    return {
        originalArray: a,
        sortedArray: a,
        reversedArray: reversedArray,
        // sortedCopy: sortedNew,
    }
    
}

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log(processArray(arr));


// Implement the printArrayElements function that takes an array as input. Use the following loops to perform specific tasks:
// 1. Using for-of : Print each element of the array.
// 2. Using for-in : Print each element of the array along with its index.
// 3. Using basic for : Compute and print the sum of all elements in the array
console.log("2nd");
function printArrayElements(array) {
	// write your code here
    for (let num of array) {
        console.log(num);
    }

    for (let x in array) {
        console.log(x, ':', array[x]);
    }

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}
const numbers = [1, 2, 3, 4, 5];
printArrayElements(numbers);

// Create a higher-order function named addFiveToAll that takes an array and element is increased by 5. Then, create another function that takes the addFiveToAll function as its first argument and prints the array
// Input: arr = [1, 2, 3, 4, 5]
// Output : 6 7 8 9 10
console.log("3rd");

function addFiveToArray(array) {
	// write your code here
    result = [];
    for (let i = 0; i < array.length; i++) {
       result.push(array[i]+=5);
    }
    return result;
}

function printNumbers(transformFunction, array) {
	// write your code here
    const transformedFunction = transformFunction(array);
    for (let i = 0; i < array.length; i++) {
        console.log(transformedFunction[i]);
    }
}

const num = [1, 2, 3, 4, 5];
printNumbers(addFiveToArray, num);


//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
const a = [2,54,23,58,47,59,58,76]

const newArray = a.filter(function(item, index) {
    if (item % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
})

console.log(newArray);


// Given an array names, create a new array nameLengths using the map method where each element in nameLengths is the length of the corresponding string in names.
// Input: names = ['Alice', 'Bob', 'Charlie', 'David']
// Output: [5, 3, 7, 5]


function getNameLengths(arr) {
    const nameLengths = arr.map(arrLength => arrLength.length);
    console.log(nameLengths);
}


const names = ['Alice', 'Bob', 'Charlie', 'David'];
getNameLengths(names);




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


console.log(students.map(value => value.gender));