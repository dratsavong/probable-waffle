
const Employee = require('./Employee')


class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email)
    }
    getRole() {
        return "intern";
    }
    getSchool() {
        return this.school;
    }
} 

module.exports = Intern;