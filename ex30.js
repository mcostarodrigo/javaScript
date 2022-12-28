/*Exercício referente map. aula 09. módulo 2 javaScript*/

const lista = [
    { nome: "Rodrigo", vip: true },
    { nome: "Maria", vip: false },
    { nome: "João", vip: true },
    { nome: "Bruno", vip: true },
    { nome: "Carla", vip: false },
    { nome: "Ana", vip: true },
    { nome: "Julio", vip: false },
];

const novaLista = lista.map((cliente) => {
    const novaLista = {
       nome: cliente.nome, 
       vip: cliente.vip,
       setor: cliente.vip ? "Black" : "Green" /*Foi usado operador ternário para definir se o cliente
       era Black ou Green*/
    } 
    
    return novaLista 
})

console.log(novaLista)