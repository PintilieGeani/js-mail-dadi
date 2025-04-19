// Mail

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.
// NON USARE INCLUDES!

// Risoluzione

// Raccolta dati:
const mail = ["mario@gmail.com", "giorgio@gmail.com", "valerio@gmail.com", "federica@gmail.com", "gregorio@gmail.com", "geani@gmail.com", "matteo@gmail.com", "rossella@gmail.com", "elisa@gmail.com", "sara@gmail.com"]
// const mailUtente = prompt("Inserisci la tua mail")
const mailUtente = "mario@gmail.com"
let presente = false

// Risoluzione Logica
for(i = 0; i < mail.length; i++){
    let curElement = mail[i]
    if(curElement === mailUtente){
        presente = true 
        break
    }
}

// Output
if(presente === true){
    console.log(`La vostra mail ${mailUtente} è presente nella lista`)
}else{
    console.log(`La vostra mail ${mailUtente} non è presente nella lista`)
}



// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.