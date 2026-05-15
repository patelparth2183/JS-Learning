// You are developing a simple program to manage a library system. Your task is to create a Book class that represents a book in the library. Each book should have the following properties:
// title (string) - The title of the book.
// author (string) - The author of the book.
// year (number) - The year the book was published.
// The Book class should have the following methods:
// getSummary() - This method should return a string summarizing the book details in the format: "Title by Author, published in Year."
// Create the Book class and demonstrate how to create an instance of the Book class and call the getSummary() method.

class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} by ${this.author}, published in ${this.year}.`;
    }
}

const myBook = new Book('The Jungle Book', 'Rudyard Kipling', 1894);
console.log(myBook.getSummary());

// You are enhancing the library system to manage different types of books. Your task is to create a Book class and a Magazine class that inherits from Book.
// The Book class should have the following properties:
// title (string) - The title of the book.
// author (string) - The author of the book.
// year (number) - The year the book was published.
// The Book class should have the following method:
// getSummary() - This method should return a string summarizing the book details in the format: "Title by Author, published in Year."
// The Magazine class should inherit from the Book class and add the following property:
// month (string) - The month the magazine was published.
// The Magazine class should override the getSummary() method to include the month in the summary. The method should return a string in the format: "Title by Author, published in Month Year."
// Create both classes and demonstrate how to create instances of both classes and call the getSummary() method.

class Book_02 {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} by ${this.author}, published in ${this.year}.`;
    }

}

class Magazine extends Book_02 {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }

    getSummary() {
        return `${this.title} by ${this.author}, published in ${this.month} ${this.year}.`;
    }
}

const book1 = new Book_02('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
console.log(book1.getSummary());

const Magazine1 = new Magazine('National Geographic', 'Various Authors', 2021, 'June');
console.log(Magazine1.getSummary());


console.log(Math);


// Write a JavaScript function createGreeting that:
// Takes two parameters: firstName (string) and lastName (string).
// Defines an object person with properties firstName and lastName.
// Defines a function greet within createGreeting that logs a greeting message using this.firstName and this.lastName.
// Uses call, apply, and bind to invoke the greet function with different contexts:
// callGreet: Uses call to invoke greet with the person object as context.
// applyGreet: Uses apply to invoke greet with the person object and an array of arguments.
// bindGreet: Uses bind to create a bound function bindGreet that can be invoked later with the person object.

console.log("New problem")

function createGreeting(firstName, lastName) {
    const person = {
        firstName: firstName,
        lastName: lastName,
    }
    
    function greet () {
        console.log(`Hello ${this.firstName} and ${this.lastName}`);
    }

    function callGreet() {
        greet.call(person);
    }

    function applyGreet() {
        greet.apply(person)
    }

    const bindGreet = greet.bind(person);

    callGreet();
    applyGreet();
    bindGreet();
    
}

createGreeting("John", "Doe");



// Write a JavaScript function createCounter that:
// Initializes a property count to 0 within an object counterObj.
// Defines a function increment within createCounter that:
// Increments this.count by 1.
// Logs the current value of this.count.
// Returns the increment arrow function.
console.log("New problem");

function createCounter() {
    const counterObj = {
        count: 0,
    }

    counterObj.increment = function () {
        counterObj.count++;
        console.log(this.count);
    }
    return counterObj;
}


const counter = createCounter();
counter.increment();
counter.increment();