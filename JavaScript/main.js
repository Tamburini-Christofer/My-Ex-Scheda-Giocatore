//Nome giocatore
let inputNome = document.getElementById("nome");
let nomeGiocatore;

inputNome.addEventListener("keypress", function(event){
    if(event.key === "Enter") {
        nomeGiocatore = inputNome.value;
        console.log(`Il nome giocatore è: ${nomeGiocatore}`)
    }
});

//Nome personaggio
let inputNomePersonaggio = document.getElementById("nome_personaggio");
let nomePersonaggio;

inputNomePersonaggio.addEventListener("keypress", function(event){
    if(event.key === "Enter") {
        nomePersonaggio = inputNomePersonaggio.value;
        console.log(`Benvenuto in questo regno, ${nomePersonaggio}. Stai per entrare in un mondo meraviglioso, fatto di miti e di leggende! Buon divertimento!`)
    }
});

//Inserimento file JSON in JavaScript 
//Collegamento a selezione armi
let data;

fetch('../Jason/armi.json')
.then(response => response.json())
  .then(json => {
    data = json; // Salvi i dati in "data"
  })
  .catch(error => console.error('Errore nel caricamento del JSON:', error));

document.getElementById('arma_1').addEventListener('click', () => {
  console.log("Armi presenti:");
  data.armi.forEach(arma => console.log(`${arma.nome} - ${arma.descrizione}`));
});
document.getElementById('arma_2').addEventListener('click', () => {
  console.log("Armi presenti:");
  data.armi.forEach(arma => console.log(`${arma.nome} - ${arma.descrizione}`));
});
document.getElementById('arma_3').addEventListener('click', () => {
  console.log("Armi presenti:");
  data.armi.forEach(arma => console.log(`${arma.nome} - ${arma.descrizione}`));
});
document.getElementById('arma_4').addEventListener('click', () => {
  console.log("Armi presenti:");
  data.armi.forEach(arma => console.log(`${arma.nome} - ${arma.descrizione}`));
});
document.getElementById('arma_5').addEventListener('click', () => {
  console.log("Armi presenti:");
  data.armi.forEach(arma => console.log(`${arma.nome} - ${arma.descrizione}`));
});

