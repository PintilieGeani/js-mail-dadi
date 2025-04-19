Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email.
NON USARE INCLUDES!

Risoluzione:

Raccolta dati: 
- Creare un array con varie mail dentro.
- Creare variabile "mailUtente" attraverso prompt dove chiedeiamo la mail.
- Creare variabile "presente" e impostarla false

Risoluzione logica:
- Creare ciclo for che scorre il nostro array.
- Impostare condizione:
- if(mailUtente === elemento){
    presente = true
    break
}

Output: 
if(presente = true){
    console.log(messaggio di successo)
}else{
    console.log(messaggio di insuccesso)
}

