import { media } from "./media";

describe('media unit tests', () => {

    it('should return 5', () => {
        const result = media(5, 5);
        expect(result).toBe(5);
    });

    it('should return 3', () => {
        const result = media(1, 5);
        expect(result).toBe(3);
    });

    it('should throw an error if any parameter is less than 0', () => {
        expect(() => media(-1, 5)).toThrowError();
        expect(() => media(1, -5)).toThrowError();
    });

});
