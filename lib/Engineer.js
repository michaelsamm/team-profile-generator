const Employee = require('./Employee');

// Create an Engineer constructor with the Employee values as the base plus a github username
class Engineer extends Employee {
    constructor(name = '', id = '', email = '', githubUsername = '') {
        super(name, id, email);

        this.githubUsername = githubUsername;
        this.role = 'Engineer';
    };

    getGithub() {
        return `${this.githubUsername}`
    };
}

module.exports = Engineer;