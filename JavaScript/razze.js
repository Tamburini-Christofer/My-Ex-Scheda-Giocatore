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