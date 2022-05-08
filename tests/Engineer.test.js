/* Employee plus:
github GitHub username
getGithub()
getRole() Overridden to return Engineer
*/

const Engineer = require('../lib/Engineer');

const engineer = new Engineer('Ed', '22222', 'ed@employer.com', 'edhub');

test('creates Engineer object', () => {
    expect(engineer.name).toBe('Ed');
    expect(engineer.id).toBe('22222');
    expect(engineer.email).toBe('ed@employer.com');
    expect(engineer.githubUsername).toBe('edhub');
});

test('gets engineer github username', () => {
    expect(engineer.getGithub()).toEqual(expect.stringContaining('edhub'));
});

test('override employee role', () => {
    expect(engineer.getRole()).toBe('Engineer');
});