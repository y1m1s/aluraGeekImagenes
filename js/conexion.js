// LISTAR TODOS LOS PRODUCTOS
async function listarVideos() {
    const url = "http://localhost:3001/productos";
    const conexion = await fetch(url);
    const conexionConvertida = await conexion.json();
    // console.log(conexionConvertida);
    return conexionConvertida;
}

// CREAR PRODUCTOS
async function crearProducto(nombrePro, precioPro, imagenPro, idPro) {
    const url = "http://localhost:3001/productos";
    const conexion = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombrePro,
            precio: precioPro,
            imagen: imagenPro,
            id: idPro
        })
    });
    const conexionConvertida = conexion.json();
    if (!conexion.ok) {
        throw new Error("Ha ocurrido algo revisar ");
    }
    return conexionConvertida;
}
// ELIMINAR UN PRODUCTO
async function eliminarProducto(id) {
    const url = `http://localhost:3001/productos/${id}`;
    console.log("Eliminar -->",id)
    const conexion = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });

}



export const conexionApi = {
    listarVideos, crearProducto, eliminarProducto
}
