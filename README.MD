Mail:
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
func main ()
- if(mailUtente === elemento){
    presente = true
    break
}
end func

Output: 
func main()
if(presente = true){
    console.log(messaggio di successo)
}else{
    console.log(messaggio di insuccesso)
}end func
<br>
<br>
<br>
Gioco dei dadi:
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Risoluzione:

Racolta dati:
- Generare un numero casuale da 1 a 6 e salvare nella costante "giocatore"
- Generare un numero casuale da 1 a 6 e salvare nella costante "computer"
- creare una costante chiamata "vicitore"

Risoluzione logica:
if(giocatore > computer){
    vincitore = "Vince il giocatore"
}if(gicatore < computer){
    vincitore = "Vince il computer"
}if{
    vincitore = "Pareggio"
}

Output:
console.log(vincitore)