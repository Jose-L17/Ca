import { modulo } from "./modulo";

describe("modulo", () => {

  it("should return the correct result", () => {
    expect(modulo(2, 1)).toBe(0);
    expect(modulo(3, 2)).toBe(1);
  });

  it("should return the correct result", () => {
    expect(modulo(4, 2)).toBe(0);
    expect(modulo(5, 3)).toBe(2);
  });

  it("should return the correct result", () => {
    expect(modulo(6, 2)).toBe(0);
    expect(modulo(7, 3)).toBe(1);
  });

  it("should return the correct result", () => {
    expect(modulo(8, 2)).toBe(0);
    expect(modulo(9, 3)).toBe(0);
  });
}
);
