class Vehiculo
{
    constructor(marca, modelo, color, placa, precio,id)
    {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.placa = placa;
        this.precio = parseFloat(precio);
        this.id = id;
    }

    asignarId(array)
    {
        this.id = array.length;
    }
}

const Vehiculos = []

let seguir = true;

while (seguir)
{
    let obtenerVehiculo = prompt("Teclea los datos del vehículo: marca, modelo, color, placa, precio, separados por una barra diagonal (/). Teclear Salir para finalizar");
    if (obtenerVehiculo.toUpperCase() == 'SALIR')
    {
        continuar = false;
        break;
    }
    const datos = obtenerVehiculo.split('/');
    console.log(datos);
    const auto = new Vehiculo(datos[0], datos[1], datos[2], datos[3], datos[4]);
    Vehiculos.push(auto);
    auto.asignarId(Vehiculos);
    console.log(Vehiculos);
}

function ordenar() 
{
    let listaOrdenada = Vehiculos.slice(0);

    return listaOrdenada.sort((a, b) => a.precio - b.precio);

}

console.log(ordenar());