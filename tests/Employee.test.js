/* Properties and methods
name
id
email
getName()
getId()
getEmail()
getRole() returns Employee
*/

const Employee = require('../lib/Employee');
const employee = new Employee('Fred', '21453', 'fred@employer.com');

test('creates an employee object', () => {
    expect(employee.name).toBe('Fred');
    expect(employee.id).toBe('21453');
    expect(employee.email).toBe('fred@employer.com');
});

test('gets employee name', () => {
    expect(employee.getName()).toEqual(expect.stringContaining('Fred'));
});

test('gets employee id', () => {
    expect(employee.getId()).toEqual(expect.stringContaining('21453'));
});

test('gets employee email', () => {
    expect(employee.getEmail()).toEqual(expect.stringContaining('fred@employer.com'));
});

test('gets employee role', () => {
    expect(employee.getRole()).toBe('Employee');
});