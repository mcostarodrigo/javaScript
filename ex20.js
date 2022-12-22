/*Faça um programa onde leia um numero e diga se ele é par ou impar.*/

let test = Math.floor(Math.random(0, 10) * 100)

if (test % 2 === 0) {
    console.log(`O número ${test} é PAR!!`)
} else {
    console.log(`O número ${test} é IMPAR !!`)
}
