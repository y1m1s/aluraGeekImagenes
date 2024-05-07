

export const tiposError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customError"
]
// Mensajes De Errores 
export const mensajes = {
    nombrePro: {
        valueMissing: "El campo nombre no puede estar vacío.",
        patternMismatch: "Por favor, ingrese un nombre válido solo texto.",
        tooShort: "Por favor, ingrese al menos tres caracteres .",
    },
    precioPro: {
        valueMissing: "El campo precio no puede estar vacío.",
        typeMismatch: "Por favor, ingrese un email válido.",
        tooShort: "Por favor, ingrese un e-mail válido.",
    },
    imagenPro: {
        valueMissing: "El campo imagen no puede estar vacío.",
        patternMismatch: "Por favor, ingrese un número de identificación válido.",
        tooShort: "El campo no tiene caracteres suficientes.",
    },
    // cuil: {
    //     valueMissing: "El campo cuil/cuit no puede estar vacío.",
    //     patternMismatch: "Por favor, ingrese un cuil/cuit válido.",
    //     customError: "El cuil/cuit ingresado no existe.",
    //     tooShort: "El campo no tiene caracteres suficientes.",
    // },
    // fecha_nacimiento: {
    //     valueMissing: "El campo fecha nacimiento no puede estar vacío.",
    //     customError: "Debes ser mayor de 18 años para registrarte.",
    // },
    // terminos: {
    //     valueMissing: "Debes aceptar los términos antes de continuar.",
    // },
};