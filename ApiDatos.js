export default class ApiDatos{

    constructor(){

        this.llave="clientes";

    }

    obtenerClientes(){

        let datos=localStorage.getItem(this.llave);

        if(datos==null){

            localStorage.setItem(this.llave,JSON.stringify([]));

            return [];

        }

        return JSON.parse(datos);

    }

    guardar(cliente){

        let clientes=this.obtenerClientes();

        let existe=clientes.find(c=>

            c.nombre.toLowerCase()==cliente.nombre.toLowerCase() &&
            c.apellido.toLowerCase()==cliente.apellido.toLowerCase()

        );

        if(existe){

            return false;

        }

        clientes.push(cliente);

        localStorage.setItem(

            this.llave,

            JSON.stringify(clientes)

        );

        return true;

    }

}