// 1 chiedere all'utente il numero di chilometri che vuole percorrere
const distance = Number(prompt("Quanti km vuoi percorrere?"))
console.log(`Distanza da voler percorrere: ${distance}`)
// 2 chiedere all'utente l'età del passeggero.
// 3 calcolare il PREZZO TOTALE del biglietto definito in base al rapporto tra 0.21€ al km
//  - SE età < 18 applicare uno sconto al PREZZO TOTALE del 20%
//      - ALTRIMENTI SE età > 65 applicare uno sconto al PREZZO TOTALE del 40% 
//      - ALTRIMENTI prezzo totale
// - Alert del prezzo finale(con massimo due decimali, per indicare i cent.).