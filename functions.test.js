const functions = require('./functions');

// beforeEach(() => functions.initDatabase());
// afterEach(() => functions.closeDatabase());

// beforeAll(() => functions.initDatabase());
// afterAll(() => functions.closeDatabase());

describe('Checking Name', () => {
    beforeEach(() => functions.nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });

    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    });
});


test('add 2 + 2 = 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('add 2 + 2 != 4', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// Should be Null
test('Should be Null', () => {
    expect(functions.isNull()).toBe(null);
});

// Checking the True or False of the function
test('Should be Tre or False', () => {
    expect(functions.checkValue(0)).toBeFalsy();
    expect(functions.checkValue(1)).toBeTruthy();
});


// Checking for the user create toEqual
test('User should be object', () => {
    expect(functions.createUser()).toEqual({ 
        firstName: 'Test', lastName: 'User' 
    });
});

// Less than or Greater than
test('Should be under 1600', () => {
    const l1 = 800;
    const l2 = 700;

    expect(l1 + l2).toBeLessThan(1600);
    expect(l1 + l2).toBeLessThanOrEqual(1600);
});

// Regex
test('Their is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in username', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

// Working with async data
test('User fetch name should be Leanne Graham', () => {
    // For async data
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual("Leanne Graham")
        })
});

// Working await
test('User fetch name should be Leanne Graham', async () => {
    // For async data
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});