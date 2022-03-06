
function ordenaValoresDecrescentes(a, b) {
    if(a > b) {
        return -1;
    }
    if(a < b) {
        return 1;
    }
    return 0;
}

function mostraParesFormados(numeros, x) {
    let paresFormados = 0;
    numeros.forEach(function percorre(a) {
        numeros.forEach(function comparacao(b) {
            if(a - b == x) {
                paresFormados++;
            }
        })
    })
    
    console.log('Quantidade de pares formados é: ' + paresFormados);
}

const exemplo1 = [1, 5, 3, 4, 2];
const exemplo2 = [4, 8, 2, 3, 7, 5];
const intervalo1 = 2;
const intervalo2 = 1;

mostraParesFormados(exemplo1, intervalo1);
mostraParesFormados(exemplo2, intervalo2);


