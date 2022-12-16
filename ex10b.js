/*Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
Porém, os dois nomes devem estar em um objeto. 
Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true.
João e Maria, imprime false.*/

const person = {
    name: "Rodrigo",
    last_name: "Costa",
    age: 33, 
    sex: "masculine",
    marital_status: "single",
    address: "São José dos Pinhais"
}

let result = person.name == person.last_name

console.log(result)