export default class Cliente {

    constructor(nombre, apellido, rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.rol = rol;
    }

    nombreValido() {
        return this.nombre.length > 3;
    }

}