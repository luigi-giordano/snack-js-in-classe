// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.


const automobili = [
  { marca: "Fiat", modello: "Panda", alimentazione: "benzina" },
  { marca: "Volkswagen", modello: "Golf", alimentazione: "diesel" },
  { marca: "Toyota", modello: "Prius", alimentazione: "elettrico" },
  { marca: "Renault", modello: "Clio", alimentazione: "gpl" },
  { marca: "Tesla", modello: "Model s", alimentazione: "elettrico" },
  { marca: "Ford", modello: "Focus", alimentazione: "diesel" },
  { marca: "BMW", modello: "Serie 3", alimentazione: "benzina" },
  { marca: "Hyundai", modello: "Ioniq", alimentazione: "elettrico" },
  { marca: "Audi", modello: "A4", alimentazione: "metano" },
  { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
];

// Creazione degli array separati
const autoBenzina = automobili.filter (auto => auto.alimentazione === 'benzina');
const autoDiesel = automobili.filter (auto => auto.alimentazione === 'diesel');
const autoAltro = automobili.filter(auto => auto.alimentazione !== "benzina" && auto.alimentazione !== "diesel");

console.log("Auto a benzina:", autoBenzina);
console.log("Auto a diesel:", autoDiesel);
console.log("Altre auto:", autoAltro);

// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

const nomi = ['orazio', 'MARCO', 'Andrea'];

const nomiDestrutturati = nomi.map((nome) => {
  
  const firstLetter = nome.charAt(0).toUpperCase();
  const otherLetter = nome.substring(1).toLocaleLowerCase();

  return nome.toLowerCase()

})
console.log(nomiDestrutturati);

// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const persone = [
  { nome: 'Luigi', cognome: 'Giordano', età: 32},
  { nome: 'Luca', cognome: 'Ferro', età: 15},
  { nome: 'Giacomo', cognome: 'Mascaro', età: 46},
  { nome: 'Francesco', cognome: 'Natino', età: 17},
  { nome: 'Luisa', cognome: 'Ranieri', età: 18},
  { nome: 'Mario', cognome: 'Ferro', età: 20},
  { nome: 'Andrea', cognome: 'Mascaro', età: 94},
  { nome: 'Federico', cognome: 'Natino', età: 10}
];

// Creazione nuovo array
let altrePersone = persone.map(persona => {
  let personaChePuoGuidare = persona.età >= 18 && persona.età <= 90 ? 'può guidare' : 'non può guidare';
  return `${persona.nome} ${persona.cognome} ${personaChePuoGuidare}`;
});
console.log(altrePersone);