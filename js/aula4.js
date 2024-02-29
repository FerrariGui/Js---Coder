var f_imprimir= (resposta) => {
    alert(`Os números ${resposta} multiplos.`)
}

var f_verificaMultiplo = (n1,n2) =>{
    if (n1 % n2 === 0|| n2 % n1 === 0) {
        return "são"
    } else {
        return "não são"
    } 
}
function main() {
    const n1 = parseInt(prompt("Digite o primeiro número: "))
    const n2 = parseInt(prompt("Digite o segundo número: "))
    const multiplo = f_verificaMultiplo(n1,n2)
    f_imprimir(multiplo)
}
main()