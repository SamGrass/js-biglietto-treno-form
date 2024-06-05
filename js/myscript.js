// chiedere nome e cognome
const userName = document.querySelector("#nome-cognome");

//chiedere all’utente il numero di chilometri che vuole percorrere
const userKm = document.querySelector("#Kilometri");

//l’età del passeggero.
const userAge = document.querySelector("#selezione-età");

console.log(userName, userKm, userAge)

// calcolare lo sconto minorenni
let minorsDiscount = 80 / 100;

// calcolare lo sconto anziani
let eldersDiscount = 60 / 100;

// creare un pulsante che aggiorni nome, Km, età

const myButton = document.querySelector("#my-button");

 myButton.addEventListener("click",
    function(){

        // input nome
        let inputName = userName.value;

        // input Km con prezzo biglietto in base ai km (0.21 € al km)
        let inputKm = parseFloat(userKm.value);
        let pricePerKm = inputKm * 0.21;

        // input età
        let inputAge = userAge.value;

        console.log("controllo input bottone", pricePerKm, inputName, inputAge);

        // cambiare il prezzo totale in base all'età
        if (inputAge === "minor") {
            totalPrice = pricePerKm * minorsDiscount;
        }
        else if (inputAge === "elder") {
            totalPrice = pricePerKm * eldersDiscount;
        }
        else if (inputAge === "adult") {
            totalPrice = pricePerKm;
        }

        // prezzo visibile all'utente
        let visiblePrice = totalPrice.toFixed(2);

        console.log(visiblePrice);
     }
 );




// rendere il risultato 2 digit decimali per 
