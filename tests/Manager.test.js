/* Employee plus:
officeNumber
getRole() Overridden to return Manager
*/

const Manager = require('../lib/Manager');

const manager = new Manager('Marty', '11111', 'marty@employer.com', '123');

test('creates manager object', () => {
    expect(manager.name).toBe('Marty');
    expect(manager.id).toBe('11111');
    expect(manager.email).toBe('marty@employer.com');
    expect(manager.officeNumber).toBe('123');
});

test('gets manager office number', () => {
    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining('123'));
});

test('override employee role', () => {
    expect(manager.getRole()).toBe('Manager');
});