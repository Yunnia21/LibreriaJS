class Libro {

    constructor(nombre, autor, editorial, pag, img) {
        this.nombre = nombre;
        this.autor = autor;
        this.editorial = editorial;       
        this.pag = pag;        
        this.img = img;       
    }
}
const librero = [];
if (localStorage.librero != null) {
    librero = JSON.parse(localStorage.librero);
    $("#librosAgregados").html(librero.length)
    //document.getElementById("librosAgregados").innerHTML= librero.length;

}
const libro_1 = new Libro("El Pato y la Muerte", "Wolf Erlbruch", "Barbara Fiore", 32, "./img/pato.png")
const libro_2 = new Libro("La Cosa Perdida", "Shaun Tan","Barbara Fiore", 35, "./img/cosaperdida.jpg");
const libro_3 = new Libro("¡Qué Bonito es Panamá!", "Janosch", "Kalandraka", 52, "./img/panama.jpg");
const libro_4 = new Libro("Perdido y Encontrado", "Oliver Jeffers", "Fondo de Cultura Económica", 32, "./img/perdido.jpg");
const libro_5 = new Libro("Alex Quiere un Dinosaurio", "Satoshi Kitamura y Hiawyn Oram", "Fondo de Cultura Económica", 25, "./img/alex.jpg");

const inventario = [libro_1, libro_2, libro_3, libro_4, libro_5];



let acumulador = ``;
inventario.forEach((libro) => {
    acumulador += `<div class="col mb-5">
    <div class="card h-100">
        <!-- Product image-->
        <img class="card-img-top" src="${libro.img}" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">${libro.nombre}</h5>
                <!-- book author-->
                <h6>${libro.autor}</h6>
                <p>${libro.editorial}</p>
                <p>Número de páginas ${libro.pag}
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" onclick="libreria('${libro.nombre}')">Agregar a la Librería</a></div>
        </div>
    </div>
</div>`
})
$("#aLeer").html(acumulador)
//document.getElementById("aLeer").innerHTML=acumulador


function libreria(nombre){
    const libroEncontrado = inventario.find(Libro => Libro.nombre === nombre);
    if (libroEncontrado != undefined) {
        librero.push(libroEncontrado);
    } else {
        alert("No se encontró")
    }
    
    localStorage.libreria = JSON.stringify(librero);
    $("#librosAgregados").html(librero.length)
    //document.getElementById("librosAgregados").innerHTML= librero.length;    
}
$.getJSON("users.json",function(res){
    console.log(res)
   
})