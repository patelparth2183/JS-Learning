const user = {
    names: {
        firstUser:"John",
        lastUser: "Bob",
    },
    age: 23,
    printDetails: function () {
        console.log("Details of user");
    },
    greet: function () {
        console.log("Greetings");
    }
}

console.log(user.names);
console.log(user.age);
user.greet();
console.log(user.names.firstUser);
console.log(user.names["firstUser"]);
function logProperty(propertyName) {
    console.log(user[propertyName]);
}
logProperty("age");

//To update existing Property
user.age = 20;
console.log(user.age);

user["names"]["firstUser"] = "Alice";
console.log(user["names"]["firstUser"]);

//To add new properties
user.Hobbies = ["Photography", "Travel"];
user.farewell = function () {
    console.log("Good Bye");
}
console.log(user);
user.farewell();
console.log(user.nothing);