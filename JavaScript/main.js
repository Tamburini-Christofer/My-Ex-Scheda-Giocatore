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
        console.log(`Benvenuto in questo regno, ${nomePersonaggio}`)
    }
});

//Selezione della razza
let inputRazzaPersonaggio = document.getElementById("razza_select");
let razzaPersonaggio;

inputRazzaPersonaggio.addEventListener("change", function(event){
    if(event.target.value === "first") {
        console.log("Devi selezionare una razza")
    } else if(event.target.value === "Dragonide") {
        razzaPersonaggio = event.target.value;
        console.log(`Benvenuto, orgoglioso ${razzaPersonaggio}. I Dragonidi (o Dragonborn) in D&D sono creature umanoidi che ricordano draghi in posizione eretta, privi di ali e coda, ma dotati di scaglie colorate che variano a seconda della discendenza draconica, corna, artigli e zanne. Sono creature possenti e intelligenti, con un forte senso di appartenenza al clan e alla tradizione, capaci di emettere un soffio elementale.`)
    } else if(event.target.value === "Elfo") {
        razzaPersonaggio = event.target.value;
        console.log(`Benvenuto, nobile ${razzaPersonaggio}. Gli elfi di D&D sono un popolo aggraziato e longevo, più basso degli umani e con una corporatura snella e longilinea. Hanno lineamenti delicati, orecchie a punta, e pelle e capelli in varie tonalità, spesso con un aspetto "magico". Non dormono ma meditano in trance per 4 ore, mantengono le loro capacità fisiche e mentali per secoli, e sono legati alla natura, all'arte e alla magia, con tre sottorazze principali: Alti Elfi, Elfi dei Boschi e Drow`)
    } else if(event.target.value === "Gnomo") {
        razzaPersonaggio = event.target.value;
        console.log(`Benvenuto, mio piccolo amico ${razzaPersonaggio}. Gli gnomi di D&D sono creature di taglia piccola, note per il loro entusiasmo, la vivacità e l'intelligenza. Fisicamente, hanno statura inferiore a 1 metro e un'età che può superare i 350 anni. Sono abili inventori, ingegneri e alchimisti e apprezzano l'esplorazione, la scoperta e gli scherzi. Possiedono la scurovisione e l'astuzia gnomesca, che conferisce loro vantaggio contro la magia.`)
    } else if(event.target.value === "Halfling") {
        razzaPersonaggio = event.target.value;
        console.log(`Benvenuto, giovane ${razzaPersonaggio}. Gli halfling di D&D sono creature umanoidi di bassa statura (circa 90 cm), caratterizzate da natura allegra, buon cibo, feste, ma anche da un coraggio innato e una notevole fortuna che permette loro di ripetere i tiri di dado falliti. Fisicamente hanno un aspetto minuto e inoffensivo, ma possono muoversi con agilità tra le gambe di creature più grandi. Culturalmente, sono legati alla famiglia, all'amicizia, e spesso preferiscono la vita rurale pacifica, anche se alcuni si dedicano all'avventura per curiosità o per aiutare gli altri. Esistono diverse sottorazze, tra cui il Piede Lesto, più agile e furtivo, e il Tozzo, più robusto e resistente al veleno.`)
    } else if(event.target.value === "Mezzelfo") {
        razzaPersonaggio = event.target.value;
        console.log(`Benvenuto, grandioso ${razzaPersonaggio}. I mezzelfi di D&D sono umanoidi che uniscono tratti umani ed elfici, con una longevità di circa 180 anni, un'attrazione per l'avventura e la versatilità grazie al +2 Carisma e altri due bonus alle caratteristiche. Fisicamente, hanno lineamenti aggraziati e orecchie a punta, ma il loro aspetto può variare notevolmente, riflettendo la loro doppia eredità. Molti mezzelfi si trovano spesso "in mezzo", sia fisicamente sia socialmente, e possono sentirsi a disagio in entrambe le culture elfiche e umane, portando a volte a una vita da nomadi o avventurieri.`)
    }  else if(event.target.value === "Mezzorco") {
        razzaPersonaggio = event.target.value;
        console.log(`Hey tu, vedi di fare il bravo ${razzaPersonaggio}. I mezzorchi di D&D sono individui dalla pelle grigiastra, fisicamente imponenti, con zanne prominenti e una forte corporatura, che ereditano la loro natura testarda e irruenta dalla loro discendenza orchesca, ma possiedono anche tenacia e prontezza all'azione tipiche degli umani. Beneficiano di caratteristiche come l'Attacco Selvaggio, la Resistenza Inesorabile e la Scurovisione, che li rendono abili in combattimento e adattabili in ambienti ostili.`)
    }  else if(event.target.value === "Nano") {
        razzaPersonaggio = event.target.value;
        console.log(`Buonamattina, piccola roccia di un ${razzaPersonaggio}. I nani di D&D sono umanoidi bassi, robusti e dalla vita lunga (fino a 400 anni), noti per la loro resistenza, il coraggio, la maestria nella lavorazione di metalli e pietre, e un forte attaccamento al clan e alle tradizioni. Fisicamente, sono compatti e massicci, con una stazza imponente nonostante l'altezza ridotta, e i maschi curano molto la loro barba. Si distinguono per la loro tenacia, lealtà, senso di giustizia, e una memoria che non dimentica i torti, il che li rende amici fedeli ma anche nemici implacabili.  `)
    }   else if(event.target.value === "Tiefling"){
        razzaPersonaggio = event.target.value;
        console.log(`Non vogliamo guai, ${razzaPersonaggio}. Nel gioco di ruolo fantasy Dungeons & Dragons i tiefling sono una razza di stirpeplanari che discendono dall'unione di umani e creature malvagie provenienti dai Piani Esterni come diavoli e demoni; le controparti celestiali dei tiefling sono gli aasimar.`)
    }   else if(event.target.value === "Umano") {
        razzaPersonaggio = event.target.value;
        console.log(`Fratello, che ti porta qui mio giovane amico ${razzaPersonaggio}. In D&D 5e, l'umano è la razza più versatile, caratterizzata da un aumento di tutti i punteggi di caratteristica, una maturità verso i 20 anni, e una vita inferiore ai 100 anni. Gli umani possono essere di qualsiasi allineamento e si distinguono per un'enorme varietà di aspetto fisico. Sono creature di taglia Media, con una velocità base sul terreno di 9 metri, e conoscono il linguaggio Comune più un linguaggio aggiuntivo a scelta. `);
    }
})