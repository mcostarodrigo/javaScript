/*[ ] Escreva um programa onde, você cria uma função geradora de desconto.
A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz 
se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a 
vista ou não) Os descontos funcionam da seguinte forma:
Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto.
Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto
Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%
Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%
Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%
Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto
Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO- A função deve imprimir na tela:
Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.
Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.*/


/*EXERCÍCIO NÃO FINALIZADO*/
/*EXERCÍCIO NÃO FINALIZADO*/

function desconto(nome, valorTotaldaCompra, primeiracompra, pagamentoaVista) {

    /* 04. Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto*/

    if (valorTotaldaCompra > 1000 && primeiracompra === true && pagamentoaVista === true) {
        case1 = valorTotaldaCompra * 0.7
        console.log(`Sr(a) ${nome}, o valor total de sua compra foi de R$ ${case1} obrigado!`)

        /* 06. Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => 
        desconto de 20%*/

    } else if (valorTotaldaCompra <= 499, primeiracompra === true && pagamentoaVista === true) {
        case3 = valorTotaldaCompra * 0.8
        console.log(`Sr(a) ${nome}, o valor total de sua compra foi de R$ ${case3} obrigado!`)

        /* 05. Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, 
    e maior que R$ 500 => 25% de desconto*/

    } else if (valorTotaldaCompra < 1000 >= 500, primeiracompra === true && pagamentoaVista === true) {
        case2 = valorTotaldaCompra * 0.75
        console.log(`Sr(a) ${nome}, o valor total de sua compra foi de R$ ${case2} obrigado!`)

        /* 08. Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => 
        desconto de 10%*/

    } else if (valorTotaldaCompra >= 500, primeiracompra === true && pagamentoaVista === false) {
        case6 = valorTotaldaCompra * 0.9
        console.log(`Sr(a) ${nome}, o valor total de sua compra foi de R$ ${case6} obrigado!`)

        /* 07.2. Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, 
        e maior que R$ 500 => 15% de desconto*/

    } else if (valorTotaldaCompra < 1000 >= 500, primeiracompra === true && pagamentoaVista === false) {
        case5 = valorTotaldaCompra * 0.85
        console.log(`Sr(a) ${nome}, o valor total de sua compra foi de R$ ${case5} obrigado!`)

        /* 07.1. Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 =>
        20% de desconto */

    } else if (valorTotaldaCompra > 1000, primeiracompra === true && pagamentoaVista === false) {
        case4 = valorTotaldaCompra * 0.80
        console.log(`Sr(a) ${nome}, o valor total de sua compra foi de R$ ${case4} obrigado!`)

        /* 11. Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => 
        desconto de 10%*/

    } else if (valorTotaldaCompra < 500, primeiracompra === false && pagamentoaVista === true) {
        case9 = valorTotaldaCompra * 0.90
        console.log(`Sr(a) ${nome}, o valor total de sua compra foi de R$ ${case9} obrigado!`)

        /* 10. Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, 
        e maior que R$ 500 => 15% de desconto*/

    } else if (valorTotaldaCompra < 1000 >= 500, primeiracompra === false && pagamentoaVista === true) {
        case8 = valorTotaldaCompra * 0.85
        console.log(`Sr(a) ${nome}, o valor total de sua compra foi de R$ ${case8} obrigado!`)

        /* 12.2. Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, 
        e maior que R$ 500 => 5% de desconto*/

    } if (valorTotaldaCompra < 1000 && valorTotaldaCompra >= 500, primeiracompra === false && pagamentoaVista === false) {
        caseZ = valorTotaldaCompra * 0.95
        console.log(`Sr(a) ${nome}, o valor total de sua compra foi de R$ ${caseZ} obrigado!`)

        /* 12.1. Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 
        10% de desconto - */

    } else if (valorTotaldaCompra > 1000, primeiracompra === false && pagamentoaVista === false) {
        case10 = valorTotaldaCompra * 0.90
        console.log(`Sr(a) ${nome}, o valor total de sua compra foi de R$ ${case10} obrigado!`)

        /* 09. Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 
    20% de desconto*/

    } else if (valorTotaldaCompra > 1000, primeiracompra === false && pagamentoaVista === true) {
        case7 = valorTotaldaCompra * 0.80
        console.log(`Sr(a) ${nome}, o valor total de sua compra foi de R$ ${case7} obrigado!`)

        /* 13. Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => 
SEM DESCONTO- */

    } else {
        case11 = valorTotaldaCompra
        console.log(`Sr(a) ${nome}, o valor total de sua compra foi de R$ ${case11} obrigado!`)

    }

}


desconto("Rodrigo", 200, false, false)