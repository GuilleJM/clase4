/*Ejercicio 1: "Calculadora de Potencias"
Implementa una función que calcule potencias usando recursividad.
El programa debe:
- Crear una función que reciba base y exponente
- Usar recursividad para calcular la potencia
- Manejar casos especiales (exponente 0, negativo)
*/

function calcularPotencias (base, exponente) {

    if (exponente == 0) {
        return 1;
    } else if (exponente < 0) {
        return 1 / calcularPotencias(base, -exponente);
    } else {
        return base * calcularPotencias(base, exponente - 1);
    }

}

console.log(calcularPotencias(2, 3));
console.log(calcularPotencias(9, 1));
console.log(calcularPotencias(4, -2));