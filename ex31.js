/*Exercício 2 referente map. aula 09. módulo 2 javaScript. 
Alunos que tiraram nota maior que 7 são aprovados, e os que tiraram menos são reprovados.*/

const estudantes = [
    { nome: "Rodrigo", notaDeTeste: 7 },
    { nome: "Maria", notaDeTeste: 5 },
    { nome: "João", notaDeTeste: 8 },
    { nome: "Bruno", notaDeTeste: 9 },
    { nome: "Carla", notaDeTeste: 3 },
    { nome: "Ana", notaDeTeste: 2 },
    { nome: "Julio", notaDeTeste: 10 },
];

const resultadoAlunos = estudantes.map(estudante => {
    let aprovadoOuNao

    if (estudante.notaDeTeste >= 7) {
        aprovadoOuNao = "Aprovado"
    } else {
        aprovadoOuNao = "Reprovado"
    }

    const estudantes = {
        nome: estudante.nome,
        resultadoFinal: aprovadoOuNao 
        }

        return estudantes

})

console.log(resultadoAlunos)


