
function mensagemEncriptada (mensagem) {
    const mensagemSemEspaco = mensagem.replaceAll(' ', '');
    const tamanhoMensagem = mensagemSemEspaco.length;
    const tamanhoGrid = Math.round(Math.sqrt(tamanhoMensagem));
    
    let retroativo = 0;
    for(let i = 1; i <= tamanhoGrid; i++){
        let linha = mensagemSemEspaco.slice(retroativo, tamanhoGrid + retroativo);
        console.log(linha);
        retroativo = retroativo + tamanhoGrid;
    }
}
const exemplo1 = 'tenha um bom dia'
const exemplo2 = 'ola mundo';
mensagemEncriptada(exemplo1);
mensagemEncriptada(exemplo2);