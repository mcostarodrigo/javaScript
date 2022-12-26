/*Escreva um programa onde, você chame uma função, e ela diga a hora exata! 
Escreva um programa onde, você chame uma função, e ela diga que ano estamos*/


function hora() {
    let testeData = Date()
    console.log(testeData)
}

hora()

// correção Rodolfo "console.log(new Date().toLocaleTimeString('pt-BR'))" que vai mostra a hora local Brasil. 
// Outra parte do dessafio usado o get "console.log(new Date().getMinutes" que nesse caso específico retona os minutos.