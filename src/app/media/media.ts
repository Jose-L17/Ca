export function media (numero1: number, numero2: number) {

    if (numero1 <= 0 || numero2 <= 0) {
        throw new Error("Los valores de numero1 y numero2 deben ser mayores que 0.");
    }

    const result = (numero1 + numero2) / 2;
    return result;

}
