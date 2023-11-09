import { logaritmo } from './logaritmo';

describe('logaritmo', () => {
  it('should throw an error if base is less than or equal to 0', () => {
    expect(() => logaritmo(0, 1)).toThrow();
    expect(() => logaritmo(-1, 1)).toThrow();
  });

  it('should throw an error if logaritmo is less than or equal to 0', () => {
    expect(() => logaritmo(1, 0)).toThrow();
    expect(() => logaritmo(1, -1)).toThrow();
  });

  it('should return the correct result', () => {
    expect(logaritmo(2, 8)).toBe(3);
    expect(logaritmo(3, 9)).toBe(2.00);
  });

  it('should return the correct result', () => {
    expect(logaritmo(2, 16)).toBe(4);
    expect(logaritmo(3, 27)).toBe(3.00);
  });

  it('should return the correct result', () => {
    expect(logaritmo(2, 32)).toBe(5);
    expect(logaritmo(3, 81)).toBe(4.00);
  });

  it('should return the correct result', () => {
    expect(logaritmo(2, 64)).toBe(6);
    expect(logaritmo(3, 243)).toBe(5);
  });

});

