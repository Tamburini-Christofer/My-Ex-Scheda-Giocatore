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

//Selezione della razza
let inputRazzaPersonaggio = document.getElementById("razza_select");
let razzaPersonaggio;

inputRazzaPersonaggio.addEventListener("change", function(event){
    if(event.target.value === "first") {
        console.log("Devi selezionare una razza")

//Dragonide

    } else if(event.target.value === "Dragonide") {
        razzaPersonaggio = event.target.value;
        console.log(`Benvenuto, orgoglioso ${razzaPersonaggio}. Tuo padre quante zampe aveva? Perchè se ne aveva due + le altre attaccate alle ali, non era un drago ma una cazzo di viverna.

Abilità:         

+2 Forza, +1 Carisma

Soffio draconico (attacco ad area elementale)

Resistenza a un tipo di danno (fuoco, freddo, acido ecc. a seconda del drago d’origine)
---------------------------------------------------------------------------------------`)

//Elfo

    } else if(event.target.value === "Elfo") {
        razzaPersonaggio = event.target.value;
        console.log(`Benvenuto, nobile ${razzaPersonaggio}. Gli elfi hanno un pò la puzza sotto al naso. Legolas, ad esempio. Non è che potete giocare un personaggio come Legolas nello Hobbit, ovvero volare sui sassi.

Abilità:

+2 Destrezza (agili e rapidi)

Visione crepuscolare superiore

Competenza in Percezione

Trance (non dormono, meditano 4 ore)

Immuni al sonno magico e resistenti agli incanti

Sottorazze: Alto Elfo (magia, +Intelligenza), Boschi (+Saggezza, più veloci), Drow (+Carisma, magia oscura) 
----------------------------------------------------------------------------------------------------------`)

//Gnomo

    } else if(event.target.value === "Gnomo") {
        razzaPersonaggio = event.target.value;
        console.log(`Benvenuto, mio piccolo amico ${razzaPersonaggio}. Sei fortunato a non vivere ai nostri giorni con i Social Network.

Abilità: 

+2 Intelligenza

Visione crepuscolare

Resistenza alla magia (vantaggio contro tiri salvezza su magia)

Sottorazze: Roccia (+Costituzione, esperti inventori) / Foresta (+Destrezza, parlano con piccoli animali)
---------------------------------------------------------------------------------------------------------`)

//Halfling

    } else if(event.target.value === "Halfling") {
        razzaPersonaggio = event.target.value;
        console.log(`Benvenuto, giovane ${razzaPersonaggio}. Perfetto per il "Lancio del Silvano" di "Camera Caffè
            
Abilità: 

+2 Destrezza (veloci e furtivi)

Fortuna (ritirano i tiri di 1)

Coraggiosi (vantaggio contro paura)

Piccoli e agili

Sottorazze: Piedelesto (più carismatici, si nascondono meglio) / Tozzi (più robusti, +Costituzione)
-------------------------------------------------------------------------------------------------`)
    
//Mezzelfo

    } else if(event.target.value === "Mezzelfo") {
        razzaPersonaggio = event.target.value;
        console.log(`Benvenuto, grandioso ${razzaPersonaggio}. "Non è elfo, non è umano ,sà soltanto quello che non è" cit.

Abilità:

+2 Carisma, +1 a due caratteristiche a scelta

Visione crepuscolare

Versatilità (abilità extra)

Resistenti agli incanti che influenzano la mente

Uniscono tratti di elfi e umani
--------------------------------------------------------------------------------------------------`)
   
//Mezzorco

}  else if(event.target.value === "Mezzorco") {
        razzaPersonaggio = event.target.value;
        console.log(`Hey tu, vedi di fare il bravo ${razzaPersonaggio}. "Somebody once told me the world is gonna roll me. I ain't the sharpest tool in the shed"

Abilità: 

+2 Forza, +1 Costituzione

Visione crepuscolare

Competenza in Intimidire

Tenacia Implacabile (restano in piedi a 1 PF una volta al giorno)

Attacchi Brutali (più danni con critici)
--------------------------------------------------------------------------------------------------`)
    
//Nano

}  else if(event.target.value === "Nano") {
        razzaPersonaggio = event.target.value;
        console.log(`Buonamattina, piccola roccia di un ${razzaPersonaggio}. "Li avete visti, li avete visti sulle rive del fiume"

Abilità:

+2 Costituzione (resistenti e robusti)

Visione crepuscolare

Resistenza ai veleni

Addestrati in armi e strumenti da artigiano

Sottorazze: Colline (più saggi, +PF) / Montagne (più forti, +Forza)
---------------------------------------------------------------------------------------------------`)
   
//Tiefling

}   else if(event.target.value === "Tiefling"){
        razzaPersonaggio = event.target.value;
        console.log(`Non vogliamo guai, ${razzaPersonaggio}. "Lives, all mortal lives expire souls go to their dooms in flame. Forevermore. Hell, hell, hell has it's laws. Hell, hell, effects and the cause"

Abilità: 

+2 Carisma, +1 Intelligenza

Visione crepuscolare

Resistenza al fuoco

Magia innata (Thaumaturgy, Hellish Rebuke, Darkness a seconda del livello)

Origine infernale (discendenti dei diavoli)
---------------------------------------------------------------------------------------------------`)
    
//Umano

}   else if(event.target.value === "Umano") {
        razzaPersonaggio = event.target.value;
        console.log(`Fratello, che ti porta qui mio giovane amico ${razzaPersonaggio}. Davvero vuoi essere umano? Hai molte scelte. Non voglio convincerti, ma potresti ripensarci. Dipende da te

Abilità: 

+1 a tutte le caratteristiche (versatile)

Variante (con regola opzionale): +1 a due caratteristiche, un talento extra e una competenza in abilità
-----------------------------------------------------------------------------------------------------`);
    }
})

//Selezione della classe
let inputClassePersonaggio = document.getElementById("classe");
let classePersonaggio;

inputClassePersonaggio.addEventListener("change", function(event){
    if(event.target.value === "first") {
        console.log("Devi selezionare una classe")

//Barbaro

    } else if(event.target.value === "Barbaro") {
        classePersonaggio = event.target.value;
        console.log(`Hai scelto la classe ${classePersonaggio}. Spacchiamo tutto!!!

Abilità di classe:

Punto forte: Forza e Costituzione

Combattente corpo a corpo resistente

Rabbia (rage): aumenta danni e resistenza

Ottimo per tank e danni fisici

Abilità tipiche: Atletica, Sopravvivenza

---------------------------------------------------------------------------------------`)

//Bardo

    } else if(event.target.value === "Bardo") {
        classePersonaggio = event.target.value;
        console.log(`Hai scelto la classe ${classePersonaggio}. Un pò come Assurancetourix.

Abilità di classe:

Punto forte: Carisma

Magia versatile e incantesimi di supporto

Ispirazione bardica: potenzia compagni

Competente in molte abilità

Ruolo: supporto, controllo, diplomazia

----------------------------------------------------------------------------------------------------------`)

//Chierico

    } else if(event.target.value === "Chierico") {
        classePersonaggio = event.target.value;
        console.log(`Hai scelto la classe ${classePersonaggio}. Tra botte, fede e bestemmie.

Abilità di classe:

Punto forte: Saggezza

Incantesimi divini, cura e protezione

Dominio: specializzazione (es. Guerra, Vita, Inganno)

Ruolo: supporto, difesa, combattimento moderato

Armature e armi mediamente buone

---------------------------------------------------------------------------------------------------------`)

//Druido

    } else if(event.target.value === "Druido") {
        classePersonaggio = event.target.value;
        console.log(`Hai scelto la classe ${classePersonaggio}. Puzzi di fungo e fango!

Abilità di classe:   

Punto forte: Saggezza

Incantesimi naturali e trasformazione (Forma Selvatica)

Controllo della natura, evocazioni, guarigione

Ruolo: supporto, attacco magico, tank flessibile

Legame con animali e elementi

-------------------------------------------------------------------------------------------------`)
    
//Guerriero

    } else if(event.target.value === "Guerriero") {
        classePersonaggio = event.target.value;
        console.log(`Hai scelto la classe ${classePersonaggio}. Un pò come Dark Souls, nudi e crudi!

Abilità di classe: 

Punto forte: Forza o Destrezza

Maestro delle armi, versatile in combattimento

Stile di combattimento e Secondo Fiato

Ruolo: tank, danni fisici, frontliner

Sottoclassi: Champion, Battle Master, Eldritch Knight

--------------------------------------------------------------------------------------------------`)
   
//Monaco

}  else if(event.target.value === "Monaco") {
        classePersonaggio = event.target.value;
        console.log(`Hai scelto la classe ${classePersonaggio}. Gandhi e Jackie Chan hanno avuto un figlio di nome Chuck Norris

Abilità di classe:

unto forte: Destrezza e Saggezza

Combattente veloce e agile

Ki: risorse per mosse speciali (attacchi extra, schivate)

Ottimo per movimento rapido, attacchi multipli e abilità acrobatiche

--------------------------------------------------------------------------------------------------`)
    
//Paladino

}  else if(event.target.value === "Paladino") {
        classePersonaggio = event.target.value;
        console.log(`Hai scelto la classe ${classePersonaggio}. Loda il sole!!!

Abilità di classe:

Punto forte: Forza e Carisma

Incantesimi divini e combattimento corpo a corpo

Imposizione del Giuramento (es. Devoto, Vendicatore)

Capacità di cura e potenziamento compagni

Ruolo: frontliner, difensore e supporto

---------------------------------------------------------------------------------------------------`)
   
//Ranger

}   else if(event.target.value === "Ranger"){
        classePersonaggio = event.target.value;
        console.log(`Hai scelto la classe ${classePersonaggio}. In the Eyes of a Ranger, the unsuspecting stranger had better know the truth of wrong from right. Cause the eyes of the Ranger are upon you anything you do hes gonna see. So when you are in Texas look behind you, cause that is where the Rangers gonna be

Abilità di classe:

Punto forte: Destrezza e Saggezza

Combattimento a distanza o misto

Nemico prescelto e Stile di combattimento

Compagno animale opzionale

Ruolo: esploratore, scout, arciere

---------------------------------------------------------------------------------------------------`)
    
//Ladro

}   else if(event.target.value === "Ladro") {
        classePersonaggio = event.target.value;
        console.log(`Hai scelto la classe ${classePersonaggio}. Politico?

Abilità di classe:

Punto forte: Destrezza

Furtività, scassinamento, attacchi precisi

Attacco Furtivo: danno extra

Abile in abilità e trappole

Ruolo: esploratore, assassino, supporto tattico

-----------------------------------------------------------------------------------------------------`);

//Stregone

}    else if(event.target.value === "Stregone") {
        classePersonaggio = event.target.value;
        console.log(`Hai scelto la classe ${classePersonaggio}. Uno stregone non è mai in ritardo, Frodo Baggins. Né in anticipo. Arriva precisamente quando intende farlo. 

Abilità di classe:

Punto forte: Carisma

Magia innata, flessibile

Origine dei poteri (Bloodline, Draconic, Wild Magic)

Ruolo: attacco magico, controllo campo

Pochi incantesimi ma potenti

-----------------------------------------------------------------------------------------------------`);

//Warlock

}   else if(event.target.value === "Warlock") {
        classePersonaggio = event.target.value;
        console.log(`Hai scelto la classe ${classePersonaggio}. Non è quello Dc, ne Marvel

Abilità di classe: 

Punto forte: Carisma

Patto con entità soprannaturale

Invocazioni: poteri extra e magia costante

Ruolo: attacco magico a lungo raggio, utility

Compagni o armi magiche opzionali

-----------------------------------------------------------------------------------------------------`);

//Mago

}   else if(event.target.value === "Mago") {
        classePersonaggio = event.target.value;
        console.log(`Hai scelto la classe ${classePersonaggio}. Honolulu sto arrivando!!! 


-----------------------------------------------------------------------------------------------------`);
}
})

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

