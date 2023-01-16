const Employee = require('../lib/Employee');
const employee = new Employee ('destiny','4','destiny@mail.com');


it('should get values for new employee', () => {
    expect(employee.name).toBe('destiny');
    expect(employee.id).toBe('4');
    expect(employee.email).toBe('destiny@mail.com');
});

it('should get value from getRole()', () => {
    expect(employee.getRole()).toBe('Employee');
});

it('should get value from getName()', () => {
    expect(employee.getName()).toBe('destiny');
});


it('should get value from getID()', () => {
    expect(employee.getID()).toBe('4');
});

it('should get value from getEmail()', () => {
    expect(employee.getEmail()).toBe('destiny@mail.com');
});