/*Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 
'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se 
a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra
 outra mensagem. */

let win = Math.floor(Math.random(0, 10) * 10)

let test = Math.floor(Math.random(0, 10) * 10)

if (win === test) {
    console.log("Parabéns, você ganhou!!!")
} else {
    console.log("Não foi dessa vez, tente de novo ;)")
}
console.log (".................")
console.log("Display:")
console.log(win)
console.log(test)