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

//Inserimento automatico del livello
let inputXp = document.getElementById("xp");
let inputBonusLivello = document.getElementById("bonus_ct_li");
let playerLevel = document.getElementById("livello");

document.getElementById('xp').addEventListener('input', () => {
  let xp = parseInt(inputXp.value) || 0;

  if ((xp >= 0) && (xp < 300)){
        playerLevel.textContent = "1";
        inputBonusLivello.textContent = "+2"
  } else if ((xp >= 300) && (xp < 900)){
        playerLevel.textContent = "2";
        inputBonusLivello.textContent = "+2"
  } else if ((xp >= 900) && (xp < 2700)){
        playerLevel.textContent = "3";
        inputBonusLivello.textContent = "+2"
  }  else if ((xp >= 2700) && (xp < 6500)){
        playerLevel.textContent = "4";
        inputBonusLivello.textContent = "+2"
  } else if ((xp >= 6500) && (xp < 14000)){
        playerLevel.textContent = "5";
        inputBonusLivello.textContent = "+3"
  } else if ((xp >= 14000) && (xp < 23000)){
        playerLevel.textContent = "6";
        inputBonusLivello.textContent = "+3"
  } else if ((xp >= 23000) && (xp < 34000)){
        playerLevel.textContent = "7";
        inputBonusLivello.textContent = "+3"
  } else if ((xp >= 34000) && (xp < 48000)){
        playerLevel.textContent = "8";
        inputBonusLivello.textContent = "+3"
  } else if ((xp >= 48000) && (xp < 64000)){
        playerLevel.textContent = "9";
        inputBonusLivello.textContent = "+4"
  } else if ((xp >= 64000) && (xp < 85000)){
        playerLevel.textContent = "10";
        inputBonusLivello.textContent = "+4"
  } else if ((xp >= 85000) && (xp < 100000)){
        playerLevel.textContent = "11";
        inputBonusLivello.textContent = "+4"
  } else if ((xp >= 100000) && (xp < 120000)){
        playerLevel.textContent = "12";
        inputBonusLivello.textContent = "+4"
  } else if ((xp >= 120000) && (xp < 140000)){
        playerLevel.textContent = "13";
        inputBonusLivello.textContent = "+5"
  } else if ((xp >= 140000) && (xp < 165000)){
        playerLevel.textContent = "14";
        inputBonusLivello.textContent = "+5"
  } else if ((xp >= 165000) && (xp < 195000)){
        playerLevel.textContent = "15";
        inputBonusLivello.textContent = "+5"
  } else if ((xp >= 195000) && (xp < 225000)){
        playerLevel.textContent = "16";
        inputBonusLivello.textContent = "+5"
  } else if ((xp >= 225000) && (xp < 265000)){
        playerLevel.textContent = "17";
        inputBonusLivello.textContent = "+6"
  } else if ((xp >= 265000) && (xp < 305000)){
        playerLevel.textContent = "18";
        inputBonusLivello.textContent = "+6"
  } else if ((xp >= 305000) && (xp < 355000)){
        playerLevel.textContent = "19";
        inputBonusLivello.textContent = "+6"
  } else if ((xp >= 3400)) {
        playerLevel.textContent = "20";
        inputBonusLivello.textContent = "+6"
  } 
})