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


//🏆 Snack 3

//Crea una funzione eseguiOperazione

//Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.
const sottrazione = (num1,num2) => (num1 - num2)
const divisione = (num1,num2) => (num1 / num2)

const eseguiOperazione = (num1, num2, operazione) => operazione(num1, num2);

console.log(eseguiOperazione(20, 10, sottrazione)); //output 10
console.log(eseguiOperazione(20, 10, divisione)); //output 2


//🏆 Snack 4

//Crea un generatore di funzioni creaTimer

//Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

const creaTimer = (tms) => {
    return setTimeout(() => console.log("Tempo scaduto!"), tms)
}

creaTimer(1000); //dopo un secondo ottengo la scritta "Tempo scaduto!"



//🏆 Snack 5
//Crea una funzione stampaOgniSecondo con setInterval.
//Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

//Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.


const stampaOgniSecondo = (messaggio) => {
    let count = 0;
    
    const Intervallo = setInterval(() => {
    console.log(messaggio)

    count++;

    if(count === 5){
        clearInterval(Intervallo);
        console.log("Intervallo Fermato")
    } 

    } ,1000)
    
     
}

stampaOgniSecondo("ciao Mondo!")




//🏆 Snack 6
//Crea un contatore automatico con setInterval
//Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(tms){

    let count = 0;

return function avviaContatore(){
    const Intervallo = setInterval(() => {

        count ++;
        console.log(count)


        if(count === 7){
        clearInterval(Intervallo);
        }
        
        },tms)
} 
}

const start = creaContatoreAutomatico(1000);
start();


/*
🏆 Snack 7
Crea una funzione che ferma un timer dopo un certo tempo
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. 
Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
*/


function eseguiEferma (messaggio, tavv, tstop){
setTimeout(() => {
console.log(messaggio)

const intervallo = setInterval(() => {
    console.log(messaggio)
}, 1000)

setTimeout(() => {
    clearInterval(intervallo);
    console.log("Tempo scaduto!")
},tstop);

}, tavv);
}

eseguiEferma("Ciao Giuse", 3000, 10000);




/*
🎯 Snack 8 (Bonus)
Crea una funzione che simula un conto alla rovescia
Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. 
Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
*/

function contoAllarovescia (n) {
    let counter = n;
    const intervallo = setInterval(() => {
    console.log(counter)
    counter--;

    if(counter === 0){
     clearInterval(intervallo);
     console.log("Fine conto alla rovescia!")
    }
    }, 1000)
}

contoAllarovescia(5);

/*
🎯 Snack 9 (Bonus)
Creare una funzione che esegue una sequenza di operazioni con ritardi
Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
*/


arrOperaizioni = ["op1", "op2", "op3", "op4", "op5"];


function sequenzaOperazioni (arr, tint){
arr.forEach((element, index) => {
setTimeout(() => {
console.log(element + "!" + index);
}, tint * index)
})
}

sequenzaOperazioni(arrOperaizioni, 1000);




/*
🎯 Snack 10 (Bonus)
Creare un throttler per limitare l’esecuzione di una funzione
Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.

*/

function stampaMessaggio (msg){
    return console.log("Messaggio:", msg);
}



function creaThrottler(funz, t_lim) {
    let pronto = true;
  
    return function esegueSoloSePuo(arg) {
      if (pronto) {
        funz(arg);
        pronto = false;
        setTimeout(function() {
            pronto = true;
          }, t_lim);
          
      }
    };
  }
  

  const throttled = creaThrottler(stampaMessaggio, 2000);

  setInterval(() => {
    throttled("Ciao Giuseeeeeeeee!");
  }, 500);

