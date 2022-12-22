/*Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.*/

let test1 = Math.floor(Math.random(0, 10) * 10)
let test2 = Math.floor(Math.random(0, 10) * 10)
let test3 = Math.floor(Math.random(0, 10) * 10)

let maior = test1

if (maior < test2)
maior = test2
if (maior > test3)
maior = test3

console.log(maior)

console.log(".............")
console.log ("Display:")
console.log(test1)
console.log(test2)
console.log(test3)