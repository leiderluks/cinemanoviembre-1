let peliculas=[
    {
        nombre:"Amenaza",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/amenaza.jpg?alt=media&token=71106226-0f85-4b9f-88b8-6abfb018c883",
        Sinopsis: "Imagina que rumbo al trabajo recibes un llamado telefónico con una voz que indica: Hay una bomba debajo de tu asiento. Sung-gyu (JO Woo Jin), gerente de un banco, está yendo a trabajar acompañado de sus dos hijos cuando recibe una llamada de un número privado. La persona que hace la llamada asegura a Sung-gyu que está sentado sobre una bomba y le advierte que, cuando se pare, la bomba va a estallar... En su desesperación, Sung gyu se verá en una encrucijada, puesto que no puede colgar la misteriosa llamada y deberá proteger la vida de sus hijos."

    },
    {
        nombre:"Apocalipsis",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/apocalipsis.png?alt=media&token=de44694a-cc89-4ee8-9155-717b04884d85",
        Sinopsis: "Una apasionante historia se desata cuando descubre que, en un oscuro y alejado centro para enfermos mentales, vive un hermano suyo del que no tenía noticia, un personaje luminoso que le cambiará la vida para siempre."
    },
    {
        nombre:"Jauria",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/jauria.png?alt=media&token=456682a4-ccfb-4c8c-a131-200772127a46",
        Sinopsis: "En un centro de rehabilitación experimental en medio de la selva, Eliú paga una sentencia por asesinato. Cuando su mejor amigo y cómplice es trasladado al mismo lugar, los jóvenes deberán reconstruir su crimen y enfrentar un pasado del que Eliú se quiere alejar. En medio de terapias y trabajos forzados, Eliú se enfrentará a la oscuridad de la naturaleza humana y tratará de escapar de la suya antes de que sea demasiado tarde."
    },
    {
        nombre:"Lio Lio",
        duracion:104,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/lio%20lio.jpg?alt=media&token=51efff4f-e726-4548-aa36-a3dfc0393cb6",
        Sinopsis: "La familia Primm se muda a Nueva York, donde Josh, el pequeño de la casa, tiene problemas para adaptarse a la escuela y hacer amigos. Todo cambia cuando Josh conoce a Lilo, un cocodrilo al que le apasiona la música, bañarse y el caviar."
    },
    {
        nombre: "Los Reyes",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/los%20reyes%20del%20mundo.jpg?alt=media&token=de36ae17-e096-451a-a5e3-433467fa74fb",
        Sinopsis: "Un día todos los hombres se quedaron dormidos… Y los cercos de la tierra, ardieron” Rá (19), Culebro (16), Sere (14), Winny (12) Nano (13) cinco chicos de la calle de Medellín. Cinco reyes sin reino. En sus manos tienen unas viejas escrituras de una tierra heredada por Rá."
    },
    {
        nombre: "Sonrie",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/sonrie.jpg?alt=media&token=1d766115-2b2a-4965-b976-4546e2622038",
        Sinopsis: "Después de ser testigo de un extraño y traumático accidente que involucró a una paciente, la Dr. Rose Cotter (Sosie Bacon) empieza a experimentar sucesos aterradores que no puede explicarse. A medida que el terror comienza a apoderarse de su vida, Rose debe enfrentarse a su pasado para sobrevivir y escapar de su horrible nueva realidad."
    },
    {
        nombre: "Black Adam",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/Black%20adam.png?alt=media&token=a5f38f8a-b905-4d07-8995-64e4dc9a4554",
        Sinopsis: "De la mano de New Line Cinema, Dwayne Johnson protagoniza la aventura de acción Black Adam. La primera película que explora la historia de este superhéroe de DC llega a la pantalla grande bajo la dirección de Jaume Collet-Serra (Jungle Cruise). "
    },
    {
        nombre: "La Roya",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/la%20roya.jpg?alt=media&token=02cb1366-bdc5-4c18-bf38-5ba907e39287",
        Sinopsis: "orge es un joven campesino quien vive en lo alto de una montaña. Todos los de su generación han emigrado a la ciudad, pero él se ha quedado para hacerse cargo de la finca cafetera que ha heredado de su padre, mientras cuida de su abuelo y tiene amoríos con su prima Rosa."
    },
    {
        nombre: "Red",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/red.png?alt=media&token=9cc7348f-003d-4b1f-9d50-06d0be1f2ef8",
        Sinopsis: "One Piece es la historia de un chico llamado Monkey D. Luffy, quién se inspiró en Shanks, un pirata que le salvó la vida, para convertirse en el Rey de los Piratas. Al comienzo de la serie, veinticuatro años antes de la historia actual, un pirata llamado Gol D."
    },
    {
        nombre: "Tormenta",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/la%20gram%20tormenta.jpg?alt=media&token=a0c68fb3-746f-428b-82ac-78a144a7f22e",
        Sinopsis: "En otoño de 1960, trece jóvenes se enrolan en el buque escuela norteamericano Albatross para iniciar una aventura que cambia sus vidas para siempre. Al mando del duro y curtido capitán Sheldon, los chicos son empujados más allá de los límites de la adolescencia mientras exploran los misterios del Caribe."
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

    let Sinopsis = document.createElement("p")
    Sinopsis.classList.add("d-none")
    Sinopsis.textContent=pelicula.Sinopsis

    //padre e hijos
    etiquetaFila.appendChild(columna)
    columna.appendChild(tarjeta)
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(duracion)
    tarjeta.appendChild(Sinopsis)
})

//Escuchando el evento del clic en alguna pelicula de la cartelera:
let peliculaSelecionada={}
etiquetaFila.addEventListener("click",function(evento){
    if(evento.target.classList.contains("img-fluid")){
        // alert("estas seleccionando una pelicula")

       peliculaSelecionada.imagen=evento.target.parentElement.querySelector('img').src
       peliculaSelecionada.titulo=evento.target.parentElement.querySelector('h3').textContent
       peliculaSelecionada.duracion=evento.target.parentElement.querySelector('h5').textContent
       peliculaSelecionada.sinopsis=evento.target.parentElement.querySelector("p").textContent

       //Enviando nuestros datos en la pelicula selecionada a la memoria
       localStorage.setItem("pelicula",JSON.stringify(peliculaSelecionada))

       window.location.href="./src/views/verInfopeliculas.html"

    }
})  