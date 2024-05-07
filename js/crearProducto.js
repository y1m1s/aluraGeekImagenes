import { conexionApi } from "./conexion.js";
const formulario = document.getElementById('formulario');

async function crearProducto() {

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    const id = Math.floor(Math.random() * 10).toString();

    try {
        await conexionApi.crearProducto(nombre, precio, imagen, id);
        window.location.href = "../index.html";
    } catch (error) {
        alert(error);
    }
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    crearProducto();
});
