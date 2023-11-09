export function minimo(numero1: number, numero2: number) {

      if (numero1 <= 0 || numero2 <= 0) {
          throw new Error("Los valores de numero1 y numero2 deben ser mayores que 0.");
      }

      const result = Math.min(numero1, numero2);
      return result;
}
