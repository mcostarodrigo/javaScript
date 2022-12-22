/*Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa 
deve ser maior de idade e brasileira para ser aprovada */

let person = [{
    name: "Rodrigo",
    age: 34,
    sex: "masculine",
    profession: "programmer",
    nationality: "Brasileiro"
},
{
    name: "Karla",
    age: 31,
    sex: "feminine",
    profession: "physiotherapist",
    nationality: "Brasileira"
},
{
    name: "Fernanda",
    age: 31,
    sex: "feminine",
    profession: "saleswoman",
    nationality: "Brasileira"
},
{
    name: "Luana",
    age: 28,
    sex: "feminine",
    profession: "Support",
    nationality: "Brasileira"
},
{
    name: "Fred",
    age: 5,
    sex: "masculine",
    profession: "programmer",
    nationality: "Brasileiro"
}]

for (let i = 0; i < person.length; i++) {
    if (person[i].nationality === "Brasileiro" || person[i].nationality === "Brasileira" && person[i].age > 18)
    console.log(`${person[i].name} está aprovado!`)

    else { console.log(`${person[i].name} NÃO está aprovado!`)}}
    

/*console.log(person[1].name)*/