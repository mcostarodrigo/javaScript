/* Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números,
 e a função responde qual número é maior */


function comparing (number1, number2) {
    if (number1 > number2) {
        maior = number1
    } else {
        maior = number2
    } 
}

comparing(91, 91)

console.log (`O maior número digitado é ${maior}`)

/*Esse desafio foi respondido da seguinte forma:

const number = (numberOne, numberTwo) => {
    if(numberOne > numberTwo)console.log("O primeiro é maior")
    else console.log ("O segundo é maior")
}

number (x,x)

*/