/*Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem 
condizente: - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os 
números são pares => TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, 
colocar uma mensagem => Há números pares e ímpares.*/

let test1 = Math.floor(Math.random(0, 10) * 100)
let test2 = Math.floor(Math.random(0, 10) * 100)
let test3 = Math.floor(Math.random(0, 10) * 100)
let test4 = Math.floor(Math.random(0, 10) * 100)

console.log(".............")
console.log ("Display:")
console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)

if (test1 % 2 === 0 && test2 % 2 === 0 && test3 % 2 === 0 && test4 % 2 === 0 ) {
    console.log ("Todos os números são pares!!")
} else if (test1 % 2 !== 0 && test2 % 2 !== 0  && test3 % 2 !== 0 && test4 % 2 !== 0 ){
    console.log ("Todos os números são impares!!")
} else {
    console.log ("Há números pares e ímpares")
}