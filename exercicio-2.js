const numeros = [1, 5, 3, 4, 2];
function ordenaValoresDecrescentes(a, b) {
    if(a > b) {
        return -1;
    }
    if(a < b) {
        return 1;
    }
    return 0;
}

let paresFormados = 0;
numeros.forEach(function percorre(a) {
    numeros.forEach(function comparacao(b) {
        if(a - b == 2) {
            paresFormados++;
        }
    })
})

console.log('Quantidade de pares formados é: ' + paresFormados);