/*
  - 2C = Dos de Treboles
  - 2D = Dos de Diamantes
  - 2H = Dos de Corazones
  - 2S = Dos de Espadas
*/
let deck = [];
const tipos = ['C', 'D', 'H', 'S']
const cartasEspeciales = ['A', 'J', 'Q', 'K'];

/* Creación de la función para crear deck */

const crearDeck = () => {

    /* 
       Creando los elementos del arreglo 
       Las cartas van del número 2 al 10, y las cartas especiales   
    */
    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    for (const tipo of tipos) {
        for (const especial of cartasEspeciales) {
            deck.push(especial + tipo);
        }
    }
    /* Desordenando las cartas con la libreria Underscore, con la función _.shuffle*/
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

/* Función que me permite tomar  una carta */


const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el Deck';
    }
    const carta = deck.pop();
    console.log(deck);
    console.log(carta);

    return carta;
}
// pedirCarta();    

/* Función que determina el valor de la Carta */

const valorCarta = (carta) => {
  
    const valor = carta.substring(0, carta.length-1);
    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1; 
}

const valor = valorCarta(pedirCarta());
console.log(valor);


