const Manager = require('../lib/Manager');
const manager = new Manager ('destiny','4','destiny@mail.com','3');

it('should get values for new manager', () => {
    expect(manager.name).toBe('destiny');
    expect(manager.id).toBe('4');
    expect(manager.email).toBe('destiny@mail.com');
});

it('should get value from getRole()', () => {
    expect(manager.getRole()).toBe('manager');
});

it('should get value from getName()', () => {
    expect(manager.getName()).toBe('destiny');
});

it('should get value from getID()', () => {
    expect(manager.getID()).toBe('4');
});

it('should get value from getEmail()', () => {
    expect(manager.getEmail()).toBe('destiny@mail.com');
});

it('should get value from getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toBe('3');
});