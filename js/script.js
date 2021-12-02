/*
    creo delle variabili con nome, cognome e colore preferito
    utilizzando prompt per far inserire in input all'utente questi 3 dati
    dopodichè creerò un'altra variabile in cui farò la somma dei 3 valori
    precedenti aggiungendo 21 come stringa finale e stamperò.
*/

let userName = prompt('Inserisci il tuo Nome');
let lastName = prompt('Inserisci il tuo Cognome');
let favoriteColor = prompt('Inserisci il tuo colore preferito');

let password = userName + lastName + favoriteColor + '21';

let htmlElement = document.getElementById('password');
htmlElement.innerHTML = `La tua password è: ${password}`;