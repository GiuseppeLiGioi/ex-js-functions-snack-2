// 🏆 Snack 1

// Crea una funzione che somma due numeri.

//Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function somma (n1, n2){
    return console.log(n1+n2);
}

somma(10,5); //output 15

//Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

const sommaAnonima = function (n1, n2){
    return console.log(n1 + n2);
}

sommaAnonima(20, 10); //output 30



//Quindi, riscrivi la funzione somma con la sintassi delle arrow functions. 
const arrowSomma = (n1,n2) => {
    return console.log(n1 + n2);
}

arrowSomma(20, 20) //output 40


//🏆 Snack 2
//Crea una arrow function che calcola il quadrato di un numero.

//Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = numero => console.log(numero * numero);

quadrato(10); //output 100