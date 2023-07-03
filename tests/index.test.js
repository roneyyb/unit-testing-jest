const fizzBuzz = require('../index.js');

describe('fixBuzz()', () => {
    it('return FizzBuzz for multiple of 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
    });

    it('returns number given', () => {
        expect(fizzBuzz(19)).toBe('19');
    });

    it('returns Fizz for multiple of 3', () => {
        expect(fizzBuzz(9)).toBe('Fizz');
    });
    it('returns Buzz for multiple of 5', () => {
        expect(fizzBuzz(10)).toBe('Buzz');
    });
});
