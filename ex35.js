/* 01. Adicionar 10% ao valor de mercado de cada companhia
02. /*Filtar empresas fundadas antes do ano 2000*/

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kin Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },

];

const novosValores = companies.map((novoValor) => {
    const novosValores = {
        name: novoValor.name,
        marketValue: novoValor.marketValue * 1.1,
        CEO: novoValor.CEO,
        foundedOn: novoValor.foundedOn
    }
    return novosValores
})


const empresasFundadasAntes2000 = novosValores.filter(founde => {
    if (founde.foundedOn < 2000) return true
})

const valorEmpresasFundadasAntes2000 = empresasFundadasAntes2000.reduce((acumulador, valorAtual) => {
    return Number(acumulador + valorAtual.marketValue)
}, 0)

console.log(`O valor total das companhias fundadas antes do ano 2000, e com acrecimo de 10% 
do valor da tabela original é de R$${(valorEmpresasFundadasAntes2000).toFixed(2)}`)

/*console.log(empresasFundadasAntes2000)*/