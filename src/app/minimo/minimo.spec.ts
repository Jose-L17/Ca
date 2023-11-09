import { minimo } from "./minimo";

describe('minimo', () => {
    it('should throw an error if any of the numbers is less than or equal to 0', () => {
        expect(() => minimo(-1, 1)).toThrowError();
        expect(() => minimo(1, -1)).toThrowError();
        expect(() => minimo(0, 1)).toThrowError();
        expect(() => minimo(1, 0)).toThrowError();
    });

    it('should return the minimum of two numbers', () => {
        expect(minimo(1, 2)).toBe(1);
        expect(minimo(2, 1)).toBe(1);
        expect(minimo(1, 1)).toBe(1);
    });

    it('should return the minimum of two numbers', () => {
        expect(minimo(2, 3)).toBe(2);
        expect(minimo(3, 2)).toBe(2);
        expect(minimo(2, 2)).toBe(2);
    });

    it('should return the minimum of two numbers', () => {
        expect(minimo(3, 4)).toBe(3);
        expect(minimo(4, 3)).toBe(3);
        expect(minimo(3, 3)).toBe(3);
    });

});
