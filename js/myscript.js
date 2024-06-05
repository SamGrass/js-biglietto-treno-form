// chiedere nome e cognome
const userName = document.querySelector("#nome-cognome");
//chiedere all’utente il numero di chilometri che vuole percorrere
const userKm = document.querySelector("#Kilometri");
//l’età del passeggero.
// const userAge = document.querySelecto("#selezione-età");

console.log(userName, userKm,)

// creare un pulsante che aggiorni nome, Km, età
let inputKm;
const myButton = document.querySelector("#my-button");

 myButton.addEventListener("click",
    function(){
        let inputName = userName.value;
        let inputKm = parseFloat(userKm.value);
        let pricePerKm = inputKm * 0.21;
        console.log(pricePerKm, inputName);
     }
    
 );


//calcolare prezzo biglietto in base ai km (0.21 € al km)
let pricePerKm;

let totalPrice = pricePerKm;

// calcolare lo sconto minorenni
let minorsDiscount = 80 / 100;

// calcolare lo sconto anziani
let eldersDiscount = 60 / 100;

// cambiare il prezzo totale in base all'età
// // if (userAge === "minor") {
// //     totalPrice = pricePerKm * minorsDiscount;
// // }
// // else if (userAge === "elder") {
// //     totalPrice = pricePerKm * eldersDiscount;
// // }
// // console.log(totalPrice);


// rendere il risultato 2 digit decimali per 
// // let visiblePrice = totalPrice.toFixed(2);