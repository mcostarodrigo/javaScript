/*Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
Porém, os dois nomes devem estar em dois objetos separados. 
João e Maria, imprime false.Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true.
João e Maria, imprime false.*/

const person = {
    name: "Rodrigo Costa",
    age: 33, 
    sex: "masculine",
    marital_status: "single",
    address: "São José dos Pinhais"
}

const person1 = {
    name: "Karla",
    age: 31, 
    sex: "feminine",
    marital_status: "single",
    address: "Curitiba"
}

let result = (person.name == person1.name)

console.log(result)