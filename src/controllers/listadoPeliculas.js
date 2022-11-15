let peliculas=[
    {
        nombre:"Amenaza",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/amenaza.jpg?alt=media&token=71106226-0f85-4b9f-88b8-6abfb018c883"

    },
    {
        nombre:"Apocalipsis",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/apocalipsis.png?alt=media&token=de44694a-cc89-4ee8-9155-717b04884d85"
    },
    {
        nombre:"Jauria",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/jauria.png?alt=media&token=456682a4-ccfb-4c8c-a131-200772127a46"
    },
    {
        nombre:"Lio Lio",
        duracion:104,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/lio%20lio.jpg?alt=media&token=51efff4f-e726-4548-aa36-a3dfc0393cb6"
    },
    {
        nombre: "Los Reyes",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/los%20reyes%20del%20mundo.jpg?alt=media&token=de36ae17-e096-451a-a5e3-433467fa74fb"
    },
    {
        nombre: "Sonrie",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/sonrie.jpg?alt=media&token=1d766115-2b2a-4965-b976-4546e2622038"
    },
    {
        nombre: "Black Adam",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/Black%20adam.png?alt=media&token=a5f38f8a-b905-4d07-8995-64e4dc9a4554"
    },
    {
        nombre: "La Roya",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/la%20roya.jpg?alt=media&token=02cb1366-bdc5-4c18-bf38-5ba907e39287"
    },
    {
        nombre: "Red",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/red.png?alt=media&token=9cc7348f-003d-4b1f-9d50-06d0be1f2ef8"
    },
    {
        nombre: "Tormenta",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/la%20gram%20tormenta.jpg?alt=media&token=a0c68fb3-746f-428b-82ac-78a144a7f22e"
    }
]

// let fila=document.getElementById("fila")

// peliculas.forEach(function(pelicula){
//     console.log(pelicula.poster)

//     let foto=document.createElement("img")
//     foto.src=pelicula.poster
//     foto.classList.add("img-fluid","w-100")

//     fila.appendChild(foto)

// })




// creamos una referencia al espacio HTML donde queremos 
// hacer render(pintar etiquetas)
let etiquetaFila = document.getElementById("fila")

// si |ya tengo datos que normalmente llegan al fromt como arreglo
// de objetos debemos recorrer y depurar dicha informacion

peliculas.forEach(function(pelicula){
    //para pintar la informacion de cada pelicula 
    // debemos aplicar un atecnica conocida como traversing

    //traversing es crear etiquetas de HTML de JS

    let columna = document.createElement("div")
    columna.classList.add("col")

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card", "h-100", "shadow")

    let poster = document.createElement("img")
    poster.classList.add("img-fluid", "w-100")
    poster.src=pelicula.poster

    let nombre = document.createElement("h3")
    nombre.classList.add("text-center", "fw-bold")
    nombre.textContent = pelicula.nombre

    let duracion = document.createElement("h5")
    duracion.classList.add("text-start", "text-center", "highlight")
    duracion.textContent = "Duracion " +pelicula.duracion+ " Min"

    //padre e hijos
    etiquetaFila.appendChild(columna)
    columna.appendChild(tarjeta)
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(duracion)
})