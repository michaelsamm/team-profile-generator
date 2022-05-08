/* Employee plus:
github GitHub username
getGithub()
getRole() Overridden to return Engineer
*/

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', id = '', email = '', githubUsername = '') {
        super(name, id, email);

        this.githubUsername = githubUsername;
        this.role = 'Engineer';
    };

    getGithub() {
        return `GitHub: ${this.githubUsername}`
    };
}

module.exports = Engineer;