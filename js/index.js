const zapatilla1 = new Zapatilla(1, "air jordan 1", 259, [8, 8.5, 9])
const zapatilla2 = new Zapatilla(2, "yeezy 350 boost", 399, [6, 8, 10])
const zapatilla3 = new Zapatilla(3, "adidas superstar", 89, [4, 8, 9.5, 10])
const zapatilla4 = new Zapatilla(4, "air jordan 11", 499, [11, 12, 12.5])
const zapatilla5 = new Zapatilla(5, "adidas campus", 99, [6, 7, 8, 8.5, 9])

const zapatillas = [zapatilla1, zapatilla2, zapatilla3, zapatilla4, zapatilla5]

const carrito = []

function solicitarModelo(id) {
    let modelo = zapatillas.find((zapatilla) => zapatilla.id === id)
    return modelo
}

function solicitarTotal() {
    const total = new Total(carrito)
    console.log(`El monto total de tu carrito seria 🤑${total.sumarTotal()}🤑. Muchas Gracias por tu compra😍`)
}


function solicitarAyuda() {
    let numeroId = parseInt(prompt("ingresa el numero de identificador, que es el numero rojo en la zapatilla que te gusto 😁"))
    let idSeleccionado = solicitarModelo(numeroId)
    if(idSeleccionado !== undefined) {
        alert(`Estas son las tallas disponibles de ${idSeleccionado.modelo.toUpperCase()} que has seleccionado: ${idSeleccionado.tallas} y estan en 🤑$${idSeleccionado.precio}🤑`)
    let confirmarPedido = confirm("Deseas agregar al carrito estas zapas?☺️")
    if(confirmarPedido == true){
        carrito.push(idSeleccionado)
    } else{
        solicitarAyuda()
    }  
    } else alert("⚠️el articulo que seleccionaste no existe. Intentalo Nuevamente.⚠️")
    let seguirComprando = confirm("Deseas agregar otro articulo al carrito?")
    if (seguirComprando == true) {
        solicitarAyuda()
    } else {
        console.table(carrito)
        solicitarTotal()
    }
}