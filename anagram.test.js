const isAnagram = require('./anagram');

test('isAnagram function exist', () => {
    expect(typeof isAnagram).toEqual('function');
});

// Cienma
test('Cinema is an Anegram Iceman', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

// Dormitory
test('Dormitory not is an Anegram room##', () => {
    expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

// Dormitory
// test('Hello is not an Aloha ', () => {
//     expect(isAnagram('Hello', 'Alleoha')).toBeTruthy();
// });
