//DICHIARO LA FUNZIONE ITS_UPDATE()
async function its_update(){
    const response = await fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json');
    const json = await response.json();

    //DICHIARO LA VARIABILE "ELEMENTI"
    let elementi = Object.keys(json.programming_languages_popular);

    //DICHIARO LA VARIABILE "INDICE"
    let indice = document.getElementsByTagName("span");

    //CONTO GLI SPAN
    console.log(indice.length);

    /*
    for(let i=0; i < divisioni.length; i++){
        console.log("Indice: " + i + " " + divisioni[i].innerHTML);
    }
    */

    //MODIFICO L'INDICE CON GLI ELEMENTI DEL JSON
    /*
    indice[7].innerHTML=json.programming_languages_popular[0];
    indice[9].innerHTML=json.programming_languages_popular[1];
    indice[17].innerHTML=json.programming_languages_popular[2];
    indice[19].innerHTML=json.programming_languages_popular[3];
    indice[27].innerHTML=json.programming_languages_popular[4];
    indice[33].innerHTML=json.programming_languages_popular[5];
    indice[35].innerHTML=json.programming_languages_popular[6];
    indice[39].innerHTML=json.programming_languages_popular[7];
    */
    
    //MODIFICO L'INDICE CON GLI ELEMENTI DEL JSON E I LINK ALLA WIKI
    indice[7].innerHTML = '<a href="https://it.wikipedia.org/wiki/Assembly" target="_blank">' + json.programming_languages_popular[0] + '</a>';
    indice[9].innerHTML = '<a href="https://it.wikipedia.org/wiki/Batchfile" target="_blank">' + json.programming_languages_popular[1] + '</a>';
    indice[17].innerHTML = '<a href="https://it.wikipedia.org/wiki/C" target="_blank">' + json.programming_languages_popular[2] + '</a>';
    indice[19].innerHTML = '<a href="https://it.wikipedia.org/wiki/C_sharp" target="_blank">' + json.programming_languages_popular[3] + '</a>';
    indice[27].innerHTML = '<a href="https://it.wikipedia.org/wiki/C++" target="_blank">' + json.programming_languages_popular[4] + '</a>';
    indice[33].innerHTML = '<a href="https://it.wikipedia.org/wiki/Clojure" target="_blank">' + json.programming_languages_popular[5] + '</a>';
    indice[35].innerHTML = '<a href="https://it.wikipedia.org/wiki/CoffeeScript" target="_blank">' + json.programming_languages_popular[6] + '</a>';
    indice[39].innerHTML = '<a href="https://it.wikipedia.org/wiki/Dart" target="_blank">' + json.programming_languages_popular[7] + '</a>';

    //SOSTITUISCO L'IMMAGINE DEL SITO
    let img = document.getElementsByTagName("img");
    //console.log(img);
    img[0].src="https://logospng.org/download/w3schools/w3schools-2048.png";
}

//RICHIAMO LA FUNZIONE ITS_UPDATE
its_update()