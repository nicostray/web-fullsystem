const listaProductos = [
    {nombre : 'Kyocera M2640', descripcion : "una multifuncional blanco y negro", imagen : "./assets/equipos/m2640.png", pdf : "./assets/pdf/ECOSYS_M2640idw.pdf", ppm : "40", multifuncional : "A4", ram : "512 MB", capacidadHojas : "350"},
    {nombre : 'Kyocera M3655', descripcion : "una multifuncional blanco y negro", imagen : "./assets/equipos/m3655idn.png", pdf : "./assets/pdf/ECOSYS_3655idn.pdf", ppm : "55", multifuncional : "A4", ram : "1 GB", capacidadHojas : "500"},
    {nombre : 'Kyocera M6235', descripcion : "una multifuncional color", imagen : "./assets/equipos/ECOSYS M6235cdn.png", pdf : "./assets/pdf/ECOSYS_M6235cidn.pdf", ppm : "35", multifuncional : "A4", ram : "1 GB", capacidadHojas : "350"},
    {nombre : 'Kyocera TaskAlfa 5501i', descripcion : "una multifuncional blanco y negro", imagen : "./assets/equipos/kyocera_Taskalfa_5501i.png", pdf : "/assets/pdf/TaskAlfa_5501i.pdf", ppm : "55", multifuncional : "A3", ram : "2 GB", capacidadHojas : "1000"},
    {nombre : 'Kyocera M2035', descripcion : "una multifuncional blanco y negro", imagen : "./assets/equipos/M2035.png", pdf : "./assets/pdf/ECOSYS_M2035dn.pdf", ppm : "35", multifuncional : "A4", ram : "512 MB", capacidadHojas : "250"},
    ]

mostrarCategoria(0);
function mostrarCategoria(identificador){
    const largoDeLista = document.getElementsByClassName("main-productos__container").length;
    for (let i = 0; i<largoDeLista;i++){
        if(i === identificador){
            document.getElementsByClassName("main-productos__container")[i].style.display = "block";
        }else{
            document.getElementsByClassName("main-productos__container")[i].style.display = "none";
        }
    }
}

function verProducto (nombreProducto){
    var encontrado = listaProductos.filter(elemento => elemento.nombre == nombreProducto);
    document.getElementsByClassName("ventana-producto__titulo")[0].innerText = encontrado[0].nombre;
    document.getElementsByClassName("ventana-producto__imagen")[0].src = encontrado[0].imagen;

    document.getElementsByClassName("ventana-producto__btn-pdf")[0].href = encontrado[0].pdf;
    document.getElementById("ppm").innerText = encontrado[0].ppm;
    document.getElementById("multifuncional").innerText = encontrado[0].multifuncional;
    document.getElementById("ram").innerText = encontrado[0].ram;
    document.getElementById("capacidadHojas").innerText = encontrado[0].capacidadHojas;
    mostrarInfo();
}

/*Mostrar info de productos en ventana*/

const ventanaInfo = document.getElementsByClassName("ventana-producto")[0];

function mostrarInfo() {
    ventanaInfo.style.display = "flex";
    document.getElementsByTagName('body')[0].style.overflow = "hidden";
}

function ocultarInfo() {
    ventanaInfo.style.display = "none";
    document.getElementsByTagName('body')[0].style.overflow = "auto";
}