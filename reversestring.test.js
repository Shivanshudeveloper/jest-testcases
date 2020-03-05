const reverseString = require('./reversestring');

// Test if that function exist
test('reverseString function exist', () => {
    expect(reverseString).toBeDefined();
});

// Reverse the string
test('If the String Reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');
});