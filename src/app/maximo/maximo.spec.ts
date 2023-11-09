import { maximo } from "./maximo";

describe("maximo", () => {
  it("debería devolver 3 cuando se le pasan 2 y 3", () => {
    expect(maximo(2, 3)).toEqual(3);
  });

  it("debería devolver 3 cuando se le pasan 3 y 2", () => {
    expect(maximo(3, 2)).toEqual(3);
  });

  it("debería devolver 3 cuando se le pasan 3 y 3", () => {
    expect(maximo(3, 3)).toEqual(3);
  });

  it("debería devolver 4 cuando se le pasan 3 y 4", () => {
    expect(maximo(3, 4)).toEqual(4);
  });

  it("debería devolver 4 cuando se le pasan 4 y 3", () => {
    expect(maximo(4, 3)).toEqual(4);
  });

  it("debería devolver 4 cuando se le pasan 4 y 4", () => {
    expect(maximo(4, 4)).toEqual(4);
  });

  it("debería devolver 5 cuando se le pasan 5 y 4", () => {
    expect(maximo(5, 4)).toEqual(5);
  });

});
