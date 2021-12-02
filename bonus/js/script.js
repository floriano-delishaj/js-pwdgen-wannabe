/*
    lo scopo del bonus è far scegliere all'utente, avendo due numeri,
    se applicare un'addizione, una sottrazione, una moltiplicazione oppure
    una divisione utilizzando un ciclo iterativo
*/

let scelta = prompt('scegli se eseguire una addizione(+), una sottrazione(-), una moltiplicazione (*) oppure una divisione (/)');
let num1 = prompt('inserisci primo numero');
let num2 = prompt('inserisci secondo numero');


let risultato;

let numero1 = parseInt(num1);
let numero2 = parseInt(num2);

if (scelta == '+') {
    risultato = numero1 + numero2;
} else if (scelta == '-') {
    risultato = numero1 - numero2;
} else if (scelta == '*') {
    risultato = numero1 * numero2;
} else if (scelta == '/') {
    risultato = numero1 / numero2;
}

let htmlElement = document.getElementById('risultato');
htmlElement.innerHTML = `Il risultato è: ${risultato}`;