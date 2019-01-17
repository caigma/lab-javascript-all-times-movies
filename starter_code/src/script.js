




window.onload = function() {

    
    // para verificar que se llama a la función hacer console.log
    // console.log("aaa")
    
    var yearButton = document.querySelector("#btn-year");

    // para verificar que me ha cogido el botón
    // console.log(yearButton)

    // apunto con el click a la funcion getYearMovies
    // ojo, no pongo parentesis en getYearMovies, ya que la propia
    // acción del botón, cuando clique, es la que le pone los paréntesis.
    yearButton.onclick = getYearMovies;
}
    
function getYearMovies(){

    // cuando he escrito un año y le doy a click debo repescar el año

    var year = document.querySelector("#yearMovie").value
    // puedo hacer console.log para ver que me devuelve (year)
    // console.log(year)
    
    // podría hacer un if para chequear que se introduce un año
    var moviesFilter = movies.filter(function(movie){

        return movie.year == year
       
    })
    //ahora podria chequear el 
    //console.log(moviesFilter)

    // ahora voy a coger todos las pelis filtradas y voy a mostrarlas en pantalla.
    //para ello crearé tantos div como pelicuales tenga, y los añadiré al DOM con <h2> y <h3>
    //utilizaré forEach

    moviesFilter.forEach(function(movie){

        // creo un elemento <div> y lo meto en movieContainer
        var movieContainer = document.createElement('div');
        console.log(movieContainer)
        console.log()
        // meto el tag <h2> tal y como lo escribiría en html en el campo innerHTML del <div>
        // en h2 pondré el titulo = movie.title (cada movie que estoy cogiendo con el forEach)
        // con h3 pondré el director
        movieContainer.innerHTML = '<h2>Título: '+movie.title+'</h2>'
        movieContainer.innerHTML += '<h3>Director: '+movie.director+'</h3>'
        
        // ahora tengo que meter cada <div> en <body>
        // primero referencio body a una variable
        var father = document.querySelector("body");
        // le pongo los hijos div>
        father.appendChild(movieContainer)

    })


}