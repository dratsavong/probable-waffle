const Engineer = require('../lib/Engineer');
const engineer = new Engineer ('destiny','4','destiny@mail.com');

it('should get values for new engineer', () => {
    expect(engineer.name).toBe('destiny');
    expect(engineer.id).toBe('4');
    expect(engineer.email).toBe('destiny@mail.com');
});

it('should get value from getRole()', () => {
    expect(engineer.getRole()).toBe('engineer');
});

it('should get value from getName()', () => {
    expect(engineer.getName()).toBe('destiny');
});

it('should get value from getID()', () => {
    expect(engineer.getID()).toBe('4');
});

it('should get value from getEmail()', () => {
    expect(engineer.getEmail()).toBe('destiny@mail.com');
});

it('should get value from getGithub()', () => {
    expect(engineer.getGithub()).toBe('github.com/destiny');
});