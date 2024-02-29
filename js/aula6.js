function main() {
    let valor = prompt("Insira um valor para a ser somado: ");
    let soma = 0, media = 0, quantidade = 0.0;
    

    while (valor != "sair") {
        soma += parseInt(valor) ;
        quantidade += 1;
        media = soma/quantidade;

        alert(`Soma: ${soma}, Média: ${media.toFixed(2)}`);
        
        valor = prompt("Insira um valor para a ser somado: (Flag de parada: sair)");
    }

}
main();