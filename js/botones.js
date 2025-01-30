// Obtener los elementos del DOM
const siBtn = document.getElementById('siBtn');
const noBtn = document.getElementById('noBtn');
const imagen = document.getElementById('imagen');
const gif1 = document.getElementById('gif1');
const gif2 = document.getElementById('gif2');
const texto = document.getElementById('texto');

// Listas de imágenes, GIFs y textos para cada botón
const siOpciones = [
    { img: 'img/perrito.jpg', text: 'Ya te dije que te amo? ♡ ', gif: 'img/kirbyapa.gif' },
    { img: 'img/cat heart.jpg', text: 'Te debo muchos besitos amor <3 ' , gif: 'img/kirbyfeli.gif' },
    { img: 'img/menu.jpg', text: 'TE AMOOOOO MUCHISIMOOOO MI NIÑOOOO!! 💕', gif: 'img/kirbyyei.gif' }
];

const noOpciones = [
    { img: 'img/devastado.jpg', text: 'Por qué ño amor? (⁠｡⁠•́⁠︿⁠•̀⁠｡⁠) ', gif: 'img/kirbywat.gif' },
    { img: 'img/cry.jpg', text: 'Ese boton solo es para fines ilustrativos amor :c', gif: 'img/kirbycu.gif' },
    { img: 'img/tite.jpg', text: '¿De verdad no quieres? (⁠╥⁠﹏⁠╥⁠)', gif: 'img/kirbycry.gif' }
];

// Contadores para alternar entre opciones
let siIndex = 0;
let noIndex = 0;

// Función para cambiar cuando se presiona "Sí"
siBtn.addEventListener('click', () => {
    const opcion = siOpciones[siIndex];

    // Cambiar la imagen, texto y GIFs
    imagen.src = opcion.img;
    texto.textContent = opcion.text;
    gif1.src = opcion.gif;
    gif2.src = opcion.gif;

    // Avanzar al siguiente elemento de la lista (cíclico)
    siIndex = (siIndex + 1) % siOpciones.length;
});

// Función para cambiar cuando se presiona "No"
noBtn.addEventListener('click', () => {
    const opcion = noOpciones[noIndex];

    // Cambiar la imagen, texto y GIFs
    imagen.src = opcion.img;
    texto.textContent = opcion.text;
    gif1.src = opcion.gif;
    gif2.src = opcion.gif;

    // Avanzar al siguiente elemento de la lista (cíclico)
    noIndex = (noIndex + 1) % noOpciones.length;
});
