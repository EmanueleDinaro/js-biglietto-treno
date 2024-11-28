// 1 chiedere all'utente il numero di chilometri che vuole percorrere
const distance = Number(prompt("Quanti km vuoi percorrere?"))
console.log(`Distanza da voler percorrere: ${distance}`)

// 2 chiedere all'utente l'età del passeggero.
const askedAge = Number(prompt("Quanti anni hai?"))
console.log(`L'età del passeggerò è ${askedAge}`)

// 3 calcolare il PREZZO TOTALE del biglietto definito in base al rapporto tra 0.21€ al km
const ticketPrice = distance * 0.21;

//  - SE età < 18 applicare uno sconto al PREZZO TOTALE del 20%
//      - ALTRIMENTI SE età > 65 applicare uno sconto al PREZZO TOTALE del 40% 
//      - ALTRIMENTI prezzo totale
//      - Alert del prezzo finale(con massimo due decimali, per indicare i cent.).
let youngTicketPrice;
let seniorTicketPrice;

if (askedAge >= 0 && askedAge < 18) {
        youngTicketPrice = ticketPrice - (ticketPrice * 20) / 100
        alert(`Sei minorenne hai diritto ad uno sconto del 20%, per cui il prezzo del tuo biglietto è di €${youngTicketPrice.toFixed(2)}`)
        console.log(`Sei minorenne hai diritto ad uno sconto del 20%, per cui il prezzo del tuo biglietto è di €${youngTicketPrice.toFixed(2)}`)
} else if (askedAge >= 65) {
        seniorTicketPrice = ticketPrice - (ticketPrice * 40) / 100
        alert(`Sei over 65 hai diritto ad uno sconto del 40%, per cui il prezzo del tuo biglietto è di €${seniorTicketPrice.toFixed(2)}`)
        console.log(`Sei over 65 hai diritto ad uno sconto del 40%, per cui il prezzo del tuo biglietto è di €${seniorTicketPrice.toFixed(2)}`)
} else {
        alert(`Il prezzo del tuo biglietto è di €${ticketPrice.toFixed(2)}`)
        console.log(`Sei uno sfigato, per cui il prezzo del tuo biglietto è intero: €${ticketPrice.toFixed(2)}`)
}