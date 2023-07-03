const greetings = (name) => `Hello ${name}`;

describe('grettings()', () => {
    it('says hello', () => {
        expect(greetings('Jest')).toBe('Hello Jest');
    });
});
