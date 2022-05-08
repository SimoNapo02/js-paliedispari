// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const scelta = prompt("Scegli fra pari e dispari"); 
const userNum = Number(prompt("Inserisci un numero tra 1 e 5"));

// Sommiamo i due numeri
const somma = userNum + genericNumber(1, 5);
console.log(somma);

// Dichiariamo chi ha vinto.
if (isEven(somma)) {
    if (scelta === "pari") {
        console.log("L'utente ha vinto");
    } else {
        console.log("Il computer ha vinto");
    }
} else {
    if (scelta === "dispari") {
        console.log("L'utente ha vinto");
    } else {
        console.log("Il computer ha vinto");
    }
}

// FUNZIONI


// Generiamo un numero random per il computer (usando una funzione).
function genericNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isEven(numero) {
    if (numero % 2 === 0) {
        return true;
    }
    return false;
}

