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
 mostraMediana([10, 20, 30, 40, 50, 60, 25]);