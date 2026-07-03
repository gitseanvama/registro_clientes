// zona de codigo principal 

function hacer_bucle(){
    for(let i =0; i<10000; i++){
        console.log(i);
    }
}

function hacer_saludo(){
    const info = await hacer_bucle();
    console.log("hola mundo.....");
}

const info_cliente = {
    "nombre": "nelson",
    "apellido": "rincon",
    "rol": "admin"
}

const boton_enviar = document.getElementById("registrar");
console.log(boton_enviar);

boton_enviar.addEventListener("click", () => {
    const info_storage = localStorage.getItem("cliente");
    console.log(info_storage);

    localStorage.setItem(info_cliente, JSON.stringify([]));
    localStorage.setItem(info_token, JSON.stringify([]));
    localStorage.setItem("info_api", JSON.stringify([]));
    localStorage.setItem("info_producto", JSON.stringify([]));
});