import { tiposError, mensajes } from "./customErrors.js"
const campoDeFormulario = document.querySelectorAll("[required]");

campoDeFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => {
        verificarCampo(campo);
    });
    campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

function verificarCampo(campo) {
    let mensaje = "";
    campo.setCustomValidity("");
    if (campo.name == "nombrePro" && campo.value.length <= 3) {
        console.log("es menor a 3");

    }
    tiposError.forEach(error => {
        if (campo.validity[error]) {
            mensaje = mensajes[campo.name][error];
            // console.log(mensaje);
        }
    });
    const mensajeError = campo.parentNode.querySelector(".advertencia");
    const validadInputCheck = campo.checkValidity();
    if (!validadInputCheck) {
        mensajeError.textContent = mensaje;
    } else {
        mensajeError.textContent = "";
    }
}
