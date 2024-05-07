import { conexionApi } from "./conexion.js";

const productosCard = document.querySelector("[data-products]");

function crearProductCard(nombre, precio, imagen, id) {
    const producto = document.createElement("div");
    producto.className = "products-card";
    producto.innerHTML = `
    <img src="${imagen}" alt="" class="products-card-img">
    <p>${nombre}</p>
    <div class="products-card-value">
        <span>$ ${precio}</span> 
        <button class="products-btn" id="${id}" >
            <img src="./img/delete.svg" alt="Eliminar producto">
        </button>
    </div>
    `;
    const btn = producto.querySelector("button");
    btn.addEventListener("click", () => {
        const idProducto = btn.id;
        conexionApi.eliminarProducto(id).then(respuesta => {
            console.log(respuesta);

        }).catch(error => {
            alert("La cagaste revisa mrd");
        });
        console.log("nose", idProducto);
    });

    return producto;
}


async function lisVideos() {
    try {
        const listaApi = await conexionApi.listarVideos();
        console.log(listaApi);
        listaApi.forEach(({ nombre, precio, imagen, id }) => productosCard.appendChild(crearProductCard(nombre, precio, imagen, id)));
    } catch (error) {
        productosCard.innerHTML = `<h2 class="mensaje-conexion "> Ha ocurrido un error con la conexión :(</h2>`;
    }
}
const eliminarProducto = (id) => {
    console.log("Eliminarid :", id);
};


lisVideos();
