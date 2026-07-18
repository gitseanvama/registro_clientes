import Cliente from "../Cliente.js";
import ApiDatos from "../ApiDatos.js";

export default class Controlador{

    constructor(){

        this.api=new ApiDatos();

        this.form=document.getElementById("frmCliente");

        this.mensaje=document.getElementById("mensaje");

        this.eventos();

    }

    eventos(){

        this.form.addEventListener(

            "submit",

            (e)=>this.registrar(e)

        );

    }

    registrar(e){

        e.preventDefault();

        const nombre=document.getElementById("nombre").value;

        const apellido=document.getElementById("apellido").value;

        const rol=document.getElementById("rol").value;

        const cliente=new Cliente(

            nombre,

            apellido,

            rol

        );

        if(!cliente.nombreValido()){

            alert("El nombre debe tener más de 3 caracteres");

            return;

        }

        let guardado=this.api.guardar(cliente);

        if(!guardado){

            alert("El cliente ya existe");

            return;

        }

        this.mensaje.innerHTML=`Hola ${cliente.nombre} ${cliente.apellido}, tu rol es: ${cliente.rol}`;

        this.form.reset();

    }

}