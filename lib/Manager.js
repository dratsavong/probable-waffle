const Employee = require("./Employee").default;


class Manager extends Employee{
    constructor (name, id, email, officeNumber) {
        super(name, id, email)
    }
    getRole() {
        return "manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
} 

module.exports = Manager;