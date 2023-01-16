const Employee = require("./Employee").default;


class Engineer extends Employee{
    constructor (name, id, email, github) {
        super(name, id, email)
    }
    getRole() {
        return "engineer";
    }
    getGithub() {
        return this.github;
    }
} 

module.exports = Engineer;