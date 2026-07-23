import Cliente from "./cliente.js";
import { guardarCliente } from "./apidatos.js";

// Referencias a la vista
const formulario = document.getElementById("frmCliente");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const rol = document.getElementById("rol");
const saludo = document.getElementById("saludo");

// Escuchar el envío del formulario
formulario.addEventListener("submit", (e) => {

    // Evitar que la página se recargue
    e.preventDefault();

    // Obtener datos del formulario
    const cliente = new Cliente(
        nombre.value.trim(),
        apellido.value.trim(),
        rol.value.trim()
    );

    // Mostrar saludo
    saludo.textContent = `Hola ${cliente.nombre}`;

    // Delegar el almacenamiento al modelo
    guardarCliente(cliente);

    formulario.reset();

});