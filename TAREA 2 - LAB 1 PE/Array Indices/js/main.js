function arrayIndex(array) {
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            if (array[i] % 2 !== 0) {
                return false;
            }
        } else {
            if (array[i] % 2 === 0) {
                return false;
            }
        }
    }
    return true;
}

const input = prompt('Ingresa una lista de números separados por comas para verificar sus indices por favor:');
const array = input.split(',').map(Number);

if (array.some(isNaN)) {
    alert('Ingresa solo números separados por comas :D');
} else {
    const result = arrayIndex(array);
    console.log(array);
    console.log('¿Sus índices pares tiene números pares y sus indices impares tienen números impares?', result);
}
