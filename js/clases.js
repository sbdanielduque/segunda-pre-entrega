class Zapatilla {
    constructor(id, modelo, precio, tallas) {
        this.id = id
        this.modelo = modelo
        this.precio = precio
        this.tallas = tallas
    }
}


class Total {
    constructor(articulo){
    this.carrito = articulo
}
sumarTotal() {
    if (this.carrito.length > 0) {
        return this.carrito.reduce((acc, zapatillas)=> acc + zapatillas.precio, 0)
    }
}
}
