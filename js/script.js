
// Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Il layout lo decidete voi.
// Non perdetevi solo nei suoi dettagli da subito, ma date priorità a farlo funzionare.
// Poi se volete lo abbellite quanto volete, quando funziona tutto. :rossetto:
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.
// *Fate sempre una cosa sola alla volta, risolvendo un problema alla volta.
// *OCIO che se arrivate al punto in cui stampate i numeri in pagina che poi devono sparire, ma la richiesta dei numeri all’utente la state facendo ancora con il prompt, su Chrome facile che non vi aggiorni la pagina nei tempi giusti (e quindi i numeri non scompaiano quando glielo dite voi). -->

// <!-- metto in pagina 5 numeri casuali

// genero un array con 5 numeri casuali -->

let numberRandom = [];

for (let i = 0; i < 5; i++ ){ 
let nbr = Math.floor(Math.random()*100) + 1;
numberRandom.push(nbr)

// console.log (nbr)
}

console.log ("questo è l'array che vedrà l'utente", numberRandom)

// ottengo un riferimento all'id a cui voglio inviari i numeri 

let numeriInPagina = document.getElementById("numerimostrati");

// inserisco in pagina i numeri dell'array 

numeriInPagina.innerHTML = numberRandom.join (",");


