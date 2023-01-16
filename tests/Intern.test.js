const Intern = require('../lib/Intern');
const intern = new Intern ('destiny','4','destiny@mail.com','OSU');

it('should get values for new intern', () => {
    expect(intern.name).toBe('destiny');
    expect(intern.id).toBe('4');
    expect(intern.email).toBe('destiny@mail.com');
});

it('should get value from getRole()', () => {
    expect(intern.getRole()).toBe('intern');
});

it('should get value from getName()', () => {
    expect(intern.getName()).toBe('destiny');
});

it('should get value from getID()', () => {
    expect(intern.getID()).toBe('4');
});

it('should get value from getEmail()', () => {
    expect(intern.getEmail()).toBe('destiny@mail.com');
});

it('should get value from getSchool()', () => {
    expect(intern.getSchool()).toBe('OSU');
});