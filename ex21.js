/*Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número 
primo e impar, - é par e divisível por 5.*/

let test = Math.floor(Math.random(0, 10) * 100)

let cont = 1

if (test % 2 === 0) {
    console.log(`O número ${test} é PAR!!`)
        if (test % 5 === 0) {
            console.log (`O número ${test} é divisível por 5.`)
        } else {
            console.log (`O número ${test} NÃO é divisível por 5.`)
        }

} else {
    console.log(`O número ${test} é IMPAR !!`)
    for (let i = 0; i < test; i++) {
        if (test % i == 0)
            cont++
    }

    if (cont === 2){
        console.log(`O número foi dividido ${cont} vezes, então é primo!`)}
        else {
        console.log (`O número foi dividido ${cont} vezes, então não é primo!`)}






















}
