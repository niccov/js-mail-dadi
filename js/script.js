/*Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
______________________________________________________________
-preparare una lista di email
-prendere la mail da un campo di testo nel documento all'evento click
-aggiungere l'event listener del pulsante
-inserire all'interno la variabile booleana in "falso"
-per ogni elemento della lista di email:
? SE la mail inserita è uguale alla mail a cui siamo arrivati 
  .ALLORA modifica la variabile booleana in "vero" 
? SE la variabile booleana è "vero"
  .ALLORA scrivi in pagina "accesso consentito"  
: ALTRIMENTI 
  .scrivi in pagina "accesso negato"  
*/

const EmailAutorizzate = ['email1@example.com', 'email2@example.com', 'email3@example.com'];

let userEmail = document.getElementById("email");

let emailButton = document.getElementById("user-email-button");

let access = document.getElementById("login")


emailButton.addEventListener("click", function () {
    let isAuthorized = false;

   for (let i = 0; i < EmailAutorizzate.length; i++) {
     if (userEmail.value == EmailAutorizzate[i]) {
       isAuthorized = true;
       break;
     }
    }

    if (isAuthorized) {

        access.innerText = "Benvenuto";
        access.style.color = "green";

    } else {
        
        access.innerText = "Accesso negato";
        access.style.color = "red";

    }
})

/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/
let result = document.getElementById("risultato")
const throwDice = document.getElementById("throw")
// Genera un numero casuale tra 1 e 6 per il giocatore e per il computer
const playerScore = Math.floor(Math.random() * 6 + 1);
const computerScore = Math.floor(Math.random() * 6 + 1);

// Stabilisce il vincitore in base al punteggio più alto
throwDice.addEventListener("click", function(){

    // Genera un numero casuale tra 1 e 6 per il giocatore e per il computer
   const playerScore = Math.floor(Math.random() * 6 + 1);
   const computerScore = Math.floor(Math.random() * 6 + 1);

     if (playerScore > computerScore) {

       result.innerText = "Il tuo risultato è " + playerScore + "\n Il risultato del computer è " + computerScore + "\n Hai vinto";

     } else if (computerScore > playerScore) {

       result.innerText = "Il tuo risultato è " + playerScore + "\n Il risultato del computer è " + computerScore + "\n Hai perso";

     } else {

       result.innerText = "Il tuo risultato è " + playerScore + "\n Il risultato del computer è " + computerScore + "\n Hai pareggiato";

     }
})