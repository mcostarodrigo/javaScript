/*EXERCÍCIO APRESENTADO NA AULA DE FOREACH

const estud = [
    {nome: "João", age: 30},
    {nome: "Jonas", age: 31},
    {nome: "Josue", age: 34},
    {nome: "Pedro", age: 35},
];

let todasAsIdades = 0

estud.forEach( (qualquePalavra, index) => { //Feito por arrow function
    todasAsIdades += qualquePalavra.age
} )

const mediaDeIdade = todasAsIdades / estud.length

console.log(`A média de idade das pessoas é de ${mediaDeIdade.toFixed(0)}`)*/