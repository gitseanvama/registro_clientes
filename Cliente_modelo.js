class Clientemodelo{
    constructor(nombre, apellido, rol){
        this.nombre = nombre;
        this.apellido = apellido;
        this.rol = rol;
    }
    
    get_nombre(){
        return this.nombre;
    }
    get_apellido(){
        return this.apellido;
    }
    get_rol(){
        return this.rol;
    }
    set_nombre(nombre){
        this.nombre = nombre;
    }
    set_apellido(apellido){
        this.apellido = apellido;
    }
    set_rol(rol){
        this.rol = rol;
    }


}