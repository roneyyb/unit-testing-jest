const palindromes = require('../palindromes.js');

describe('palindromes()', () => {
    it('Returns a palindrome from the given statement', () => {
        expect(palindromes('madam')).toEqual(['madam']);
        expect(palindromes('racecar')).toEqual(['racecar']);
    });

    it('Returns empty palindrome if given no string', () => {
        expect(palindromes('')).toEqual([]);
    });

    it('Ignores casing', () => {
        expect(palindromes('Wow')).toEqual(['wow']);
    });

    it('ignores punctuation', () => {
        expect(palindromes('yo, banana boy!')).toEqual(['yobananaboy']);
    });

    it('detects multi-word palindromes', () => {
        expect(palindromes('A man, a plan, a canal, Panama')).toEqual([
            'amanaplanacanalpanama',
        ]);
    });
});
