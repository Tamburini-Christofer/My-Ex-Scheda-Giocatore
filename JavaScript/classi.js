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

Abilità di classe: 

Punto forte: Intelligenza

Massima flessibilità magica

Libro degli incantesimi: preparazione e personalizzazione

Ruolo: danno magico, controllo, utility

Debole fisicamente, forte strategicamente

-----------------------------------------------------------------------------------------------------`);
}
})