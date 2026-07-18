export default class Cliente{

    constructor(nombre,apellido,rol){

        this.nombre=nombre.trim();
        this.apellido=apellido.trim();
        this.rol=rol;

    }

    nombreValido(){

        return this.nombre.length>3;

    }

}