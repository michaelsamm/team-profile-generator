/* Employee plus:
school
getSchool()
getRole() Overridden to return Intern
*/

const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '', id = '', email = '', school = '') {
        super(name, id, email);

        this.school = school;
    };

    getSchool() {
        return `School: ${this.school}`;
    };
}

module.exports = Intern;