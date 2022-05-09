const Employee = require('./Employee');

// Create an Intern constructor built off the Employee plus a school property
class Intern extends Employee {
    constructor(name = '', id = '', email = '', school = '') {
        super(name, id, email);

        this.school = school;
        this.role = 'Intern';
    };

    getSchool() {
        return `${this.school}`;
    };
}

module.exports = Intern;