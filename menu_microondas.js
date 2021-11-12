let Pipoca = 10;
let Macarrao = 8;
let Carne = 15;
let Feijao = 12;
let Brigadeiro = 8;

function Microondas(prato, tempo) {
    let tempoPadrao;
    switch(prato)
    {
        case "Pipoca":
            tempoPadrao = Pipoca;
            break;
        case "Macarrao":
            tempoPadrao = Macarrao;
            break;
        case "Carne":
            tempoPadrao = Carne;
            break;
        case "Feijao":
            tempoPadrao = Feijao;
            break;
        case "Brigadeiro":
            tempoPadrao = Brigadeiro;
            break;
        default:
            console.log("Prato inexistente");
            return false;
    }

    if (tempo >= (2 * tempoPadrao) && tempo <= (3 * tempoPadrao)) {
        console.log('A comida queimou!');  
    } else if (tempo < tempoPadrao) {
        console.log('Tempo insuficiente!');
    } else if (tempo > (3 * tempoPadrao)) {
        console.log('Kabumm!')
    } else {
        console.log('Prato pronto, bom apetite!');
    }
}
Microondas("Pipoca", 10)