const printFirstName = function (color, hobbie) {
    console.log(`My first name is ${this.firstName} and my last name is ${this.lastName} and my favorait color is ${color}`);
    console.log(`My hobbie is to ${hobbie}.`)
}

const user = {
    firstName: "Parth",
    lastName: "Patel",
    printFullName: function () {
        console.log(`My full name is ${this.firstName} ${this.lastName}`);
    }
}

user.printFullName();

const user2 = {
    firstName: "Shivani",
    lastName: "Patel",
}

user.printFullName.call(user2);


printFirstName.call(user, "black", "Photography");
printFirstName.apply(user, ["black", "Photography"]);

printFirstName.call(user2, "red", "Travel");
printFirstName.apply(user2, ["red", "Travel"]);

const user3 = {
    firstName: "Sam",
    lastName: "Doe",
}

const printFirst = printFirstName.bind(user3, "Purple", "Music");
printFirst();


const arrowFn = {
    x: 20,
    y: function () {
            const z = () => {
            console.log(this);
        }
        z();
    }
}

arrowFn.y();