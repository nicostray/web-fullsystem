let contadorDeImagenes = 0;

const listaDeImagenes = [ //Basta con agregar las propiedades de la imagen con estructura de objeto
    {nombreDeArchivo : 'nuestros-servicios.png', textoAlt : 'Nuestros servicios', link : './servicios.html'},
    {nombreDeArchivo : 'color-a-tus-proyectos.png', textoAlt : 'dale color a tus proyectos', link : './productos.html'},
    {nombreDeArchivo : 'no-te-quedes-sin-toner.png', textoAlt : 'no te quedes sin toner', link : './productos.html'},
    {nombreDeArchivo : 'lo-mejor1.png', textoAlt : 'lo mejor en equipos multifuncionales', link : './productos.html'},
    {nombreDeArchivo : 'lo-mejor2.png', textoAlt : 'lo mejor en equipos de impresion', link : './servicios.html'},
    {nombreDeArchivo : 'lo-mejor3.png', textoAlt : 'lo mejor en equipos de impresion', link : './productos.html'},
]

const cantidadDeImagenes = listaDeImagenes.length

const segundosParaCambio = 3 //Acá podemos cambiar el tiempo entre imagenes
let timer = setInterval('siguiente()',segundosParaCambio*1000)

const siguiente = () => {
    contadorDeImagenes > cantidadDeImagenes-2 ? contadorDeImagenes = 0 : contadorDeImagenes++
    actualizarImagen(contadorDeImagenes);
}

const anterior = () => {
    contadorDeImagenes < 1 ? contadorDeImagenes = cantidadDeImagenes-1 : contadorDeImagenes--
    actualizarImagen(contadorDeImagenes);
}

const actualizarImagen = (numDeImagen) => {
    clearInterval(timer) //limpio temporizador
    timer = setInterval('siguiente()',segundosParaCambio*1000)  //vuelvo a iniciarlo
    const rutaDeImagen = `/assets/slider/${listaDeImagenes[numDeImagen].nombreDeArchivo}`
    
    document.getElementsByClassName('slider__img')[0].src=rutaDeImagen
    document.getElementsByClassName('slider__img')[0].alt= listaDeImagenes[numDeImagen].textoAlt
    document.getElementsByClassName('slider__link')[0].href = listaDeImagenes[numDeImagen].link

    document.getElementsByClassName('slider__img')[0].style.filter = 'blur(4px)'
    setTimeout("document.getElementsByClassName('slider__img')[0].style.filter = 'none'",150)
}
