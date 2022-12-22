/*.Faça um programa onde os jurados vão dar a explicação para cada nota dada. 
São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.*/

let test = Math.floor(Math.random(0, 10) * 10)

switch (test) {
    case 1:
        console.log("Seu aproveitamento foi de 01 ponto, muito baixo! ")
        break;
    case 2:
        console.log("Seu aproveitamento foi de 02 pontos, muito baixo! ")
        break;
    case 3:
        console.log("Seu aproveitamento foi de 03 pontos, muito baixo! ")
        break;
    case 4:
        console.log("Seu aproveitamento foi de 04 pontos, muito baixo! ")
        break;
    case 5:
        console.log("Seu aproveitamento foi de 05 pontos, baixo! ")
        break;
    case 6:
        console.log("Seu aproveitamento foi de 06 pontos, mediano! ")
        break;
    case 7:
        console.log("Seu aproveitamento foi de 07 pontos, aprovado! ")
        break;
    case 8:
        console.log("Seu aproveitamento foi de 08 pontos, aprovado! ")
        break;
    case 9:
        console.log("Seu aproveitamento foi de 09 pontos, aprovado, parabéns!!! ")
        break;
    case 10:
        console.log("Seu aproveitamento foi de 10 pontos, aprovado, parabéns!!! ")
        break;
    default:
        console.log("Anulado")
        break;
}