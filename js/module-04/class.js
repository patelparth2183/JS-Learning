class customer {
    constructor (name, email) {
        this.name = name;
        this.email = email;
    }

    get info() {
        return this.email;
    }

    printDetails() {
        console.log(`Name and email of the customer is ${this.name} and ${this.email}`);
    }
}

const customer1 = new customer("John", "abc@gmail.com");
console.log(customer1)
customer1.printDetails();
console.log(customer1.info);

class VIPCustomer extends customer {
    constructor (name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel;
    }

    updateLevel(level) {
        this.vipLevel = level;
        console.log(`VIP level is ${this.vipLevel}.`)
    }
}

const VIPCustomer1 = new VIPCustomer("Alice", "qwerty@gmail.com", "Platinum");
console.log(VIPCustomer1);
VIPCustomer1.updateLevel("Diamond");
VIPCustomer1.printDetails();