const palindromes = require('../palindromes.js');
const { prepareStr, isPalindrome, stringStartPalindrome } = palindromes;

describe('prepareStr()', () => {
    it('converts the given string to lowercase', () => {
        expect(prepareStr('AabB')).toBe('aabb');
    });

    it('Removes the panctuations', () => {
        expect(prepareStr('A man, a plan, a canal, Panama')).toBe(
            'amanaplanacanalpanama'
        );
    });
});

describe('isPalindrome()', () => {
    it('returns boolean true or false if given string is palindrome', () => {
        expect(isPalindrome('aaaa')).toBe(true);
        expect(isPalindrome('AaaB')).toBe(false);
        expect(isPalindrome('TTTFFFTTT')).toBe(true);
    });
});

describe('stringStartPalindrome()', () => {
    it('returns the longest palindrome at the start of the string', () => {
        expect(stringStartPalindrome('wow')).toBe('wow');
        expect(stringStartPalindrome('ahha')).toBe('ahha');
        expect(stringStartPalindrome('hohoho')).toBe('hohoh');
    });

    it('returns null if no length 3+ palindrome starts the string', () => {
        expect(stringStartPalindrome('ww')).toBe(null);
        expect(stringStartPalindrome('abcda')).toBe(null);
        expect(stringStartPalindrome('bananarama')).toBe(null);
    });
});

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

    it('detects multi-wrd palindromes', () => {
        expect(palindromes('A b c d f g')).toEqual([]);
    });
});
