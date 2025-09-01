//Selezione dell'allineamento
let inputAllineamentoPersonaggio = document.getElementById("allineamento_select");
let allineamentoPersonaggio;

inputAllineamentoPersonaggio.addEventListener("change", function(event){
    if(event.target.value === "first") {
        console.log("Devi selezionare un'allineamento")

//---------------Buono------------//
//Legale Buono

    } else if(event.target.value === "legale-buono") {
        allineamentoPersonaggio = event.target.value;
        console.log(`${allineamentoPersonaggio}: 

l’eroe che rispetta leggi e giustizia.`)

//Neutrale Buono

    } else if(event.target.value === "neutrale-buono") {
        allineamentoPersonaggio = event.target.value;
        console.log(`${allineamentoPersonaggio}: 

fa il bene senza preoccuparsi troppo delle regole.`)

//Caotico Buono

    } else if(event.target.value === "caotico-buono") {
        allineamentoPersonaggio = event.target.value;
        console.log(`${allineamentoPersonaggio}: 

ribelle altruista, segue il cuore più che le leggi.`)

//---------------Neutrale-----------//
//Legale Neutrale

    } else if(event.target.value === "legale-neutrale") {
        allineamentoPersonaggio = event.target.value;
        console.log(`${allineamentoPersonaggio}: 
            
fedele alla legge o all’ordine, senza preoccuparsi troppo del bene o del male.`)

//Neutrale Puro

    } else if(event.target.value === "neutrale-puro") {
        allineamentoPersonaggio = event.target.value;
        console.log(`${allineamentoPersonaggio}: 

cerca equilibrio, non prende posizione netta.`)
 
//Caotico Neutrale

    } else if(event.target.value === "caotico-neutrale") {
        allineamentoPersonaggio = event.target.value;
        console.log(`${allineamentoPersonaggio}: 

agisce come vuole, indipendentemente da leggi o morale.`)

//---------------Caotico-----------//
//Legale Malvagio

    } else if(event.target.value === "legale-malvagio") {
        allineamentoPersonaggio = event.target.value;
        console.log(`${allineamentoPersonaggio}: 

sfrutta le leggi e l’ordine per dominare e opprimere.`)

//neutrale Malvagio

    } else if(event.target.value === "neutrale-malvagio") {
        allineamentoPersonaggio = event.target.value;
        console.log(`${allineamentoPersonaggio}:

egoista puro, fa ciò che gli conviene.`)

//Caotico Malvagio

    } else if(event.target.value === "caotico-malvagio") {
        allineamentoPersonaggio = event.target.value;
        console.log(`${allineamentoPersonaggio}:

distruttore, crudele, agisce senza regole e senza pietà.`)
    }
})