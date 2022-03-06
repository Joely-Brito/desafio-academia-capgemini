function ordenaValores(a,b) {
    if(a > b) {
        return 1;
    }
    if(a < b) {
        return -1;
    }
    return 0;
}

function mostraMediana(numeros) {
    numeros.sort(ordenaValores)
    const posicaoCentral = (numeros.length + 1) / 2;
    console.log(numeros[posicaoCentral - 1]); 
}

const exemplo1 = [1, 5, 3, 4, 2]
const exemplo2 = [10, 20, 30, 40, 50, 60, 25]
mostraMediana(exemplo1);
mostraMediana(exemplo2);