/* Filtar empresas fundadas depois de 1975, e com mais de 200 em valor de mercado. */

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kin Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },

];

const newListCompanies = companies.filter(founde => {
    if (founde.foundedOn > 1975 && founde.marketValue > 200) return true
})

console.log(newListCompanies)

