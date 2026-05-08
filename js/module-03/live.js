function person(naam, umar,  m_f, color) {
    this.name = naam;
    this.age = umar;
    this.gender = m_f;
    this.fav_color = color;
}

const parth = new person("Parth", 27, "male", "black");
console.log(parth);



// Write a JavaScript function processArray(arr) that takes an array of numbers as input and performs the following tasks:

// Use sort() to sort the array in ascending order.
// Use reverse() to reverse the sorted array.
// Use Math.max() to find the maximum value in the array.
// Use Math.min() to find the minimum value in the array.
// Use the concept of creating a sorted copy of the array (tosorted()).

function processArray(a) {
    const sortedArray = a.sort();
    console.log(sortedArray);

    const reversedArray = sortedArray.reverse();
    console.log(reversedArray);

    console.log(Math.max(...a));

    console.log(Math.min(...a))

    const sortedNew = a.toSorted();
    console.log(sortedNew);

    return {
        originalArray: a,
        sortedArray: a,
        reversedArray: reversedArray,
        sortedCopy: sortedNew,
    }
    
}

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log(processArray(arr));