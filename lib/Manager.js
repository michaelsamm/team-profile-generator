const Employee = require('./Employee');

// Create a Manager constructor built off the Employee plus an office number
class Manager extends Employee {
    constructor(name = '', id = '', email = '', officeNumber = '') {
        super(name, id, email);

        this.officeNumber = officeNumber;
        this.role = 'Manager';
    };

    getOfficeNumber() {
        return `Office Number: ${this.officeNumber}`;
    };
}

module.exports = Manager;