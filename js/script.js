let opcion;
let cineElegido;
let peliculaElegida;

function buscarCine() 
{
    let preguntarCine;
    let cine;

    preguntarCine = parseInt(prompt("Cines disponibles \n1.- Cinepolis \n2.- Cinemex \n3.- Cine las Américas \n4.- Cine Alameda"));
    
    switch (preguntarCine)
    {
        case 1:
            cine = "Cinepolis";
            break;
        case 2:
            cine = "Cinemex";
            break;
        case 3:
            cine = "Cine las Américas";
            break;
        case 4:
            cine = "Cine Alameda";
            break;            
        default:
            cine = ""
            break;
    }
    return cine;
}

function buscarPelicula(cine)
{
    let opcionPelicula;
    let pelicula;

    switch (cine)
    {
        case "Cinepolis":
            opcionPelicula = parseInt(prompt("Películas disponibles \n1.- Harry Potter \n2.- Animales Fantásticos"));
            switch (opcionPelicula)
            {
                case 1:
                    pelicula = "Harry Potter"
                    break;
                case 2:
                    pelicula = "Animales Fantásticos"
                    break;
                default:
                    pelicula = ""
                    break;
            }
            break;
        case "Cinemex":
            opcionPelicula = parseInt(prompt("Películas disponibles \n1.- 007 \n2.- Superman"));
            switch (opcionPelicula)
            {
                case 1:
                    pelicula = "007"
                    break;
                case 2:
                    pelicula = "Superman"
                    break;
                default:
                    pelicula = ""
                    break;
            }
            break;
        case "Cine las Américas":
            opcionPelicula = parseInt(prompt("Películas disponibles \n1.- El Rey León \n2.- El Rey Escorpión"));
            switch (opcionPelicula)
            {
                case 1:
                    pelicula = "El Rey León"
                    break;
                case 2:
                    pelicula = "El Rey Escorpión"
                    break;
                default:
                    pelicula = ""
                    break;
            }
            break;
        case "Cine Alameda":
            opcionPelicula = parseInt(prompt("Películas disponibles \n1.- Avengers \n2.- Los 4 Fantásticos"));
            switch (opcionPelicula)
            {
                case 1:
                    pelicula = "Avengers"
                    break;
                case 2:
                    pelicula = "Los 4 Fantásticos"
                    break;
                default:
                    pelicula = ""
                    break;
            }
            break;        
    }
    return pelicula;
}

do
{
    alert("Busca tu próxima aventura \nPaso 1 - Elige tu cine \nPaso 2 - Elige tu película \nPaso 3 - Compra tus boletos");

    opcion = parseInt(prompt("1.- Deseas continuar \n2.- Salir"));

    switch (opcion)
    {
        case 1:
            cineElegido = buscarCine();
            if (cineElegido != "")
            {
                peliculaElegida = buscarPelicula(cineElegido);
                if (peliculaElegida != "")
                {
                    alert("Felicidades, ya tienes tus boletos para ir a ver " + peliculaElegida + " en " + cineElegido + "\nTe esperamos")
                } else
                {
                     opcion = 3
                }
            } else
            {
                opcion = 3
            }
            break;
        default:
            break;
    }

    if (opcion < 1 || opcion > 2)
    {
        alert("opción inválida");
    }
} 
while (opcion < 1 || opcion > 2);

alert("Gracias por visitarnos, te esperamos pronto");
