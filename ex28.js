/*[ ] Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um 
investimento.Você deve enviar como argumentos da função - Valor inicial investido - Valor
atual do investimento - Tempo em meses, que o valor está investidoA função deve RETORNAR a
taxa de juros, já formatada. Ex: 2,5%. Siga a formula desse vídeo para te auxiliar com o 
cálculo.Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) /
 Valor inicial investido * tempo*/

function taxa(valorInicial, valorAtual, tempoEmMeses) {
    juros = valorInicial - valorAtual
    result = (juros / (valorInicial * tempoEmMeses)* -100)
    return result
}

taxa(900, 1080, 4)

console.log (` A taxa de juros é de ${result} % ao mês`)