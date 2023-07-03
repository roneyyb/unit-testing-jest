const palindromes = require('../palindromes.js');

describe('palindromes()', () => {
    it('Returns a palindrome from the given statement', () => {
        expect(palindromes('madam')).toEqual(['madam']);
        expect(palindromes('racecar')).toEqual(['racecar']);
    });
});
