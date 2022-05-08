/* Employee plus:
school
getSchool()
getRole() Overridden to return Intern
*/

const Intern = require('../lib/Intern');

const intern = new Intern('Iris', '33333', 'iris@employer.com', 'Purdue University');

test('creates intern object', () => {
    expect(intern.name).toBe('Iris');
    expect(intern.id).toBe('33333');
    expect(intern.email).toBe('iris@employer.com');
    expect(intern.school).toBe('Purdue University');
});

test('get intern school', () => {
    expect(intern.getSchool()).toEqual(expect.stringContaining('Purdue University'));
});