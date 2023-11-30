
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

// Voglio che tutto parta quando l'utente clicca sul button "play" 



let numberRandom = [];

// Riferimento all'elemento con id "newgame"
let start = document.getElementById("newgame");

// Aggiungo un EventListener per il click
start.addEventListener('click', function() {
    // Ciclo per la generazione dei numeri random
    for (let i = 0; i < 5; i++) {
        let nbr = Math.floor(Math.random() * 100) + 1;
        numberRandom.push(nbr);
    }

    console.log("Questo è l'array che vedrà l'utente", numberRandom);

    // Riferimento all'elemento con id "numerimostrati"
    let numeriInPagina = document.getElementById("numerimostrati");

    // Inserisci in pagina i numeri dell'array
    numeriInPagina.innerHTML = numberRandom.join(",");

    // Dopo 30 secondi...
    setTimeout(function() {
        // Pulisci l'elemento numeriInPagina
        numeriInPagina.innerHTML = "";
        numberRandom = []; // Pulisci anche l'array
    }, 30000); // 30000 millisecondi corrispondono a 30 secondi
});



