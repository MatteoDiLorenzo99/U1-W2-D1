/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*

immaginiamo i datatypes come delle scatole in cui possiamo inserire diversi tipi di oggetti.
ogni scatola avrà un etichetta che ci dice cosa possiamo mettere dentro.

i principali tipi sono:
1) numero: una scatola che cotiene numeri, come 5,10,200, o decimali, come 1.2,4.134,5.958382
  esempio: let age= 19;

2) string: una scatola che contiene un insieme di caratteri alfanumerici.
  esempio: let indirizzo = "via roma 10";

3) Boolean: una scatola che può contenere solo 2 valori: il vero e il falso.
  esempio: let tastoPremuto = true;

4) Undefined: è una scatola vuota, ovvero una scatola ma non c'è niente dentro.
  esempio: let vuoto;

5) Null: è una scatola che contiene "niente".
  esempio: let risultato = null;

*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
 */

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "matteo";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 12;
let numero2 = 20;
let somma = numero1 + numero2;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = null;
x= 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const COGNOME = "DI LORENZO";
COGNOME = "MATTEO";
myName = "Di Lorenzo";
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero3 = 4;
x = x - numero3;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2= "John";
let sonoDiverse = name1 !== name2;
console.log(sonoDiverse); // Output: true, perché "john" e "John" non sono uguali (la J maiuscola fa la differenza)

// EXTRA: Verifica se diventano uguali trasformandole in lowercase
let sonoUgualiInLowercase = name1.toLowerCase() === name2.toLowerCase();
console.log(sonoUgualiInLowercase); // Output: true, ora entrambe sono "john" in minuscolo