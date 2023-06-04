const bandas = [{
        nombre: "2 minutos",
        album: "Valentin Alsina",
        año: 1994,
        imagenFondo: './img/fondo_sombreado.png',
        imagenCover: './img/2-minutos-valentin-alsina.png'
    },
    {
        nombre: "Patricio Rey Y Sus Redonditos De Ricota",
        album: "Cordero Atado",
        año: 1993,
        imagenCover: './img/cordero_atado/cordero_atado.jpg'
    }
]

const dosMinutosTracks = [
    'Valentin Alsina','Cancion de amor','Que Mala Suerte','Novedades','Odio Laburar','Amor Suicida','14 Botellas','Vos No Confiaste','Barricada','Otra Mujer','Como Caramelo De Limon','Demasiado Tarde (La Marcha)','Pelea Callejera','Arrebato','Ya No Sos Igual'
];

const audiosDosMinutos = ["./1- Valentín Alsina (1994)/01 - Valentín Alsina.mp3","./1- Valentín Alsina (1994)/02 - Canción de amor.mp3","./1- Valentín Alsina (1994)/03 - Que mala suerte.mp3","./1- Valentín Alsina (1994)/04 - Novedades.mp3","./1- Valentín Alsina (1994)/05 - Odio laburar.mp3","./1- Valentín Alsina (1994)/06 - Amor suicida.mp3","./1- Valentín Alsina (1994)/07 - 14 botellas.mp3","./1- Valentín Alsina (1994)/08 - Vos no confiaste.mp3","./1- Valentín Alsina (1994)/09 - Barricada.mp3","./1- Valentín Alsina (1994)/10 - Otra mujer.mp3","./1- Valentín Alsina (1994)/11 - Como caramelo de limón.mp3","./1- Valentín Alsina (1994)/12 - Demasiado tarde (La marcha).mp3","./1- Valentín Alsina (1994)/13 - Pelea callejera.mp3","./1- Valentín Alsina (1994)/14 - Arrebato.mp3","./1- Valentín Alsina (1994)/15 - Ya no sos igual.mp3"];

const libreriaDosMinutosTracks = [];

libreriaDosMinutosTracks.push(valentinAlsinaTema1)
libreriaDosMinutosTracks.push(valentinAlsinaTema2)
libreriaDosMinutosTracks.push(valentinAlsinaTema3)
libreriaDosMinutosTracks.push(valentinAlsinaTema4)
libreriaDosMinutosTracks.push(valentinAlsinaTema5)
libreriaDosMinutosTracks.push(valentinAlsinaTema6)
libreriaDosMinutosTracks.push(valentinAlsinaTema7)
libreriaDosMinutosTracks.push(valentinAlsinaTema8)
libreriaDosMinutosTracks.push(valentinAlsinaTema9)
libreriaDosMinutosTracks.push(valentinAlsinaTema10)
libreriaDosMinutosTracks.push(valentinAlsinaTema11)
libreriaDosMinutosTracks.push(valentinAlsinaTema12)
libreriaDosMinutosTracks.push(valentinAlsinaTema13)
libreriaDosMinutosTracks.push(valentinAlsinaTema14)
libreriaDosMinutosTracks.push(valentinAlsinaTema15)

// iconos
/* 
<i class="fa-sharp fa-solid fa-play"></i>
<i class="fa-sharp fa-solid fa-pause"></i>

<i class="fa-duotone fa-chevron-left"></i>
<i class="fa-duotone fa-chevron-right"></i>
<i class="fa-sharp fa-solid fa-forward"></i>
<i class="fa-sharp fa-solid fa-forward fa-rotate-180"></i>

<i class="fa-sharp fa-solid fa-stop"></i>
 */

/***************************** body ******************************/


const body = document.querySelector('body');
body.style.backgroundImage=`url(${bandas[0].imagenFondo})`

const header = document.querySelector('header');

header.innerHTML=`<img src="./img/viñetaSplash.modificado.png">
<h2>PUNK ROCK</h2>
<h1>${bandas[0].album} - ${bandas[0].nombre}_</h1>`;


const punkClick = document.querySelector('header img');
punkClick.addEventListener('click', function(){alert('esto es rock')});


/***************************** main ******************************/

const selectorDeLetras = document.querySelector('.letrasMenu');
selectorDeLetras.innerHTML+=`<article id="selectorDeLetra">
    <h2>${dosMinutosTracks[0]}</h2>
    <button>Kick</button>
    </article>`

const letraSeleccionada = document.querySelector('.letrasMenu h2');


const letras = document.querySelector('.letras');
letras.innerHTML+=`
    <h2>${dosMinutosTracks[0]}</h2>
    <div>${libreriaDosMinutosTracks[0]}</div>`;

const letraTitulo = document.querySelector('.letras h2');
const letraCompleta = document.querySelector('.letras div');


const seccionImg = document.querySelector('.imagenes');
seccionImg.innerHTML+=`
<p>l</p><img src=${bandas[0].imagenCover}>
<button class='button'><i class="fa-sharp fa-solid fa-forward fa-rotate-180"></i></button><ol></ol>
<p id='off'>l</p>
`

const botonMenuDesplegable = document.querySelector('.button');


botonMenuDesplegable.addEventListener('click', function(){
    seccionImg.classList.toggle('menuDesplegable')
    const menuDesplegable = document.querySelector('.menuDesplegable')
    if(menuDesplegable){
        botonMenuDesplegable.innerHTML=`<i id='iconoMenu' class="fa-sharp fa-solid fa-forward"></i>`          
    }else{
        botonMenuDesplegable.innerHTML=`<i class="fa-sharp fa-solid fa-forward fa-rotate-180"></i>`  
    }
})


const reproductor = document.getElementById('reproductor');

reproductor.innerHTML+=`<div class='funciones'>
<h3 class='reloj'>RELOJ</h3>
<ul>
<li id='a01'><i class="fa-sharp fa-solid fa-stop"></i></li>
<li id='a02'><i class="fa-sharp fa-solid fa-forward fa-rotate-180"></i></li>
<li id='a03'><i class="fa-sharp fa-solid fa-play"></i></li>
<li id='a04'><i class="fa-sharp fa-solid fa-pause"></i></li>
<li id='a05'><i class="fa-sharp fa-solid fa-forward"></i></li>
</ul>
<h2>${dosMinutosTracks[0]}</h2>
</div>
<audio src=${audiosDosMinutos} class="audio_player" id="audio"></audio>
`


/***************************** armado de listas y funciones ******************************/

const listaTitulos = document.querySelector('#listaTitulos ul');
const listaReproduccion = document.querySelector('.imagenes ol');

function armarLista(tracks, selector) {
    
    for (let i = 0; i < tracks.length; i++) {
        selector.innerHTML+=`<li>${tracks[i]}</li>`
    }
} 

armarLista(dosMinutosTracks, listaTitulos);
armarLista(dosMinutosTracks, listaReproduccion);


const listaTitulosArray = document.querySelectorAll('#listaTitulos li');
const listaReproduccionArray = document.querySelectorAll('.imagenes li');
const enReproduccion = document.querySelector('#reproductor h2');


let indiceCancionReproduccion = 0

function seleccionCancion(lista, destino) {

    lista.forEach(cancion=>{
        cancion.addEventListener('click', function () {
            destino.innerText=cancion.innerText;
        })
    })
}

indiceCancionReproduccion = dosMinutosTracks.indexOf(enReproduccion.innerText)

seleccionCancion(listaTitulosArray, letraSeleccionada);
seleccionCancion(listaReproduccionArray, enReproduccion);


const kickbutton = document.querySelector('#selectorDeLetra button');

kickbutton.addEventListener('click', function(){
    letraTitulo.innerText=letraSeleccionada.innerText;
    
    let indice = 0;
    indice = dosMinutosTracks.indexOf(letraSeleccionada.innerText);

        libreriaDosMinutosTracks.forEach(letra=>{
            letraCompleta.innerHTML=libreriaDosMinutosTracks[indice];
        })
})


/***************************** reproductor de musica ******************************/
/***************************** reproductor de musica ******************************/
/***************************** reproductor de musica ******************************/


const play = document.getElementById('a03')
const pause = document.getElementById('a04')
pause.classList.toggle('hide')


let audio = new Audio()

function darPlay(){
    play.addEventListener('click', function(){
    if(audio.pause){
        play.classList.toggle('hide')
        pause.classList.toggle('hide')
        audio.play()
    }
})
}

function darPause(){
    pause.addEventListener('click', function(){
    if(audio.play){
        pause.classList.toggle('hide')
        play.classList.toggle('hide')    
        audio.pause()        
    }
})
}

function reproducirMusica(iniciar, pausar){
    iniciar
    pausar
}

reproducirMusica(darPlay(),darPause())

function verificarYreproducir(funcionar,lista) {

    lista.forEach(cancion=>{
        cancion.addEventListener('click',function(){
            audio = new Audio(audiosDosMinutos[dosMinutosTracks.indexOf(enReproduccion.innerText)])
            funcionar
        })
    })
}

verificarYreproducir(reproducirMusica(),listaReproduccionArray)




/***************************** footer ******************************/
/***************************** footer ******************************/


const footer = document.querySelector('footer p');

footer.innerText= `${bandas[0].año} - ${bandas[0].album} - ${bandas[0].nombre}`;