/*A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre
 o salário e número de filhos. A prefeitura deseja saber: - média do salário da população; 
 - média do número de filhos; - maior salário; - O final da leitura de dados se dará com a 
 entrada de um salário negativo. - Faça isso usando uma função!*/

let people = [{
    numberofChildrens: 0,
    salary: 20.000
},
{
    numberofChildrens: 2,
    salary: 10.000
},
{
    numberofChildrens: 2,
    salary: 5.000
},
{ 
     numberofChildrens: 1,
    salary: 6.000
},
{ 
    numberofChildrens: 1,
   salary: 2.000
},
{ 
    numberofChildrens: 3,
   salary: -2.000
}
]

function findAverageAndHighestSalary(peopleInformation) {

let averageSalary = 0
let averageChildren = 0 
let highestSalary = 0

for(let i = 0; i <= peopleInformation.length; i++ ){

    const salary = peopleInformation [i].salary
    const children = peopleInformation [i].numberofChildrens

    if (salary > highestSalary) highestSalary = salary

    if (salary < 0) {
        console.log(`Média de salário R$${(averageSalary / i).toFixed(0)}`) /*toFixed(0) não mostra casa decimal*/
        console.log(`Média de filhos R$${(averageChildren / i).toFixed(0)}`)
        console.log(`Maior salário R$${highestSalary}`)
        break

    } else {
        averageSalary = averageSalary + salary;
        averageChildren += children
    }

}

}