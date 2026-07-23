const CLAVE = "clientes";

export function guardarCliente(cliente) {

    // Validar nombre
    if (!cliente.nombreValido()) {
        alert("El nombre debe tener más de 3 caracteres.");
        return;
    }

    // Inicializar localStorage
    let clientes = JSON.parse(localStorage.getItem(CLAVE));

    if (clientes == null) {
        clientes = [];
    }

    // Buscar duplicados
    const existe = clientes.find(c =>
        c.nombre.toLowerCase() === cliente.nombre.toLowerCase() &&
        c.apellido.toLowerCase() === cliente.apellido.toLowerCase()
    );

    if (existe) {
        alert("El cliente ya existe.");
        return;
    }

    // Guardar
    clientes.push(cliente);

    localStorage.setItem(CLAVE, JSON.stringify(clientes));

    alert("Cliente guardado correctamente.");

}