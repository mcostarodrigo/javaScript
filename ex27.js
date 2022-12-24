/*A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre
 o salário e número de filhos. A prefeitura deseja saber: - média do salário da população; 
 - média do número de filhos; - maior salário; - O final da leitura de dados se dará com a 
 entrada de um salário negativo. - Faça isso usando uma função!*/

 let person = [{
    name: "Rodrigo",
    age: 34,
    sex: "masculine",
    profession: "programmer",
    wage: 20.000,
    sons: 0
},
{
    name: "Joaquina",
    age: 31,
    sex: "feminine",
    profession: "physiotherapist",
    wage: 8.000,
    sons: 5
},
{
    name: "Marilda",
    age: 31,
    sex: "feminine",
    profession: "saleswoman",
    wage: 1.500,
    sons: 4
},
]

let total = 0
let valor = []

for(let i = 0; i < person.wage; i++){
    total += person.wage[i];
    valor.push ((person.wage[i] += person.wage[i]))

}

console.log (valor)