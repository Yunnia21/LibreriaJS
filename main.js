class Libro {

    constructor(nombre, autor, editorial, pag, img) {
        this.nombre = nombre;
        this.autor = autor;
        this.editorial = editorial;       
        this.pag = pag;        
        this.img = img;       
    }
}

const libro_1 = new Libro("El Pato y la Muerte", "Wolf Erlbruch", "Barbara Fiore", 32, "/img/pato.png")
const libro_2 = new Libro("La Cosa Perdida", "Shaun Tan","Barbara Fiore", 35, "/img/cosaperdida.jpg");
const libro_3 = new Libro("¡Qué Bonito es Panamá!", "Janosch", "Kalandraka", 52, "/img/panama.jpg");
const libro_4 = new Libro("Perdido y Encontrado", "Oliver Jeffers", "Fondo de Cultura Económica", 32, "/img/perdido.jpg");
const libro_5 = new Libro("Alex Quiere un Dinosaurio", "Satoshi Kitamura y Hiawyn Oram", "Fondo de Cultura Económica", 25, "/img/alex.jpg");

const inventario = [libro_1, libro_2, libro_3, libro_4, libro_5];
const librero = [];


let acumulador = ``;
inventario.forEach((libro) => {
    acumulador += `<div class="card">
    <img src="${libro.img}" width="80" height="90">    
    <h3>${libro.nombre}</h3>
    <h4>${libro.autor}</h4>
    <p>$${libro.precio}</p>
    <button onclick="libreria('${libro.nombre}')">Agregar a la Librería</button>
    </div>`
})

document.write(acumulador);

function libreria(nombre){
    console.log(nombre)
    librero.push(nombre)

    alert("Agregado a tu Librería")
}

const input = document.getElementById("newBook");
input.addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
   e.preventDefault();
   document.getElementById("ent").click();
   
  }
});