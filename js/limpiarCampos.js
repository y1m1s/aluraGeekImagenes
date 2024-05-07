function limpiarFormulario() {
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const imagen = document.querySelector("[data-imagen]");

    nombre.value = "";
    precio.value = "";
    imagen.value = "";
}
