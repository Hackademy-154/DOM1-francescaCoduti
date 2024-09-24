// Lavora con il DOM:
// crea una pagina HTML con 3 paragrafi e 3 bottoni. 
// Il primo bottone dovra’ cambiare il colore del testo dei paragrafi in modo casuale.
// ogni paragrafo dovra' avere un colore diverso. 
// il secondo dovra’ rendere il testo dei paragrafi in grassetto. 
// il terzo dovra’ far scomparire e ricomparire i paragrafi.
// TIPS:
// ricordati della proprieta’ display: none in CSS!
// i colori su CSS sono formati da R, G e B. Quindi puoi settare un colore random semplicemente randomizzando questi tre valori e mettendoli insieme. Scopri come.

let paragrafi = document.querySelectorAll('p');
console.log(paragrafi);

let changeColor = document.querySelector('#randomcolor');

let btnBold = document.querySelector('#btnBold');

let removePar = document.querySelector('#removePar');

paragrafi.forEach( (paragrafo)=>{
    let red = Math.floor(Math.random() * (255 - 0 + 1)  );
    let green = Math.floor(Math.random() * (255 - 0 + 1)  );
    let blue = Math.floor(Math.random() * (255 - 0 + 1)  );
    paragrafo.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
})









btnBold.addEventListener('click',()=>{
    paragrafi.forEach((paragrafo)=>{
        paragrafo.classList.add('grassetto')
    });
})

removePar.addEventListener('click',()=>{
    paragrafi.forEach((paragrafo)=>{
        paragrafo.classList.toggle('novisual')
    });
})








