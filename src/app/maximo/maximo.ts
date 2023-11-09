export function maximo(numero1: number, numero2: number) {
  if (numero1 <= 0 || numero2 <= 0) {
    throw new Error(
      "Los valores de numero1 y numero2 deben ser mayores que 0."
    );
  }
  if (numero1 > numero2) {
    return numero1;
  } else {
    return numero2;
  }
}
