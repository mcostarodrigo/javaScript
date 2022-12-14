//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
//Porém, os dois nomes devem estar em um Array. 
//Ex: const array = ["João", "Maria"]. João e João, imprime true. João e Maria, imprime false.

const person = [{
    name01: "Karla",
    name02: "Karla"
}
]

let result = (person[0] != person[1])

console.log(result)