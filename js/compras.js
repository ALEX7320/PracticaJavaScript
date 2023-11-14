
// LOS PRODUCTOS REGISTRADOS
productos_html = {


    1: {
        "id": 1,
        "name": "EcoSync X22 Ultra", "marca": "EcoSync",
        "price": 5219.5,
        "image": "img_1.png",
        "id_chk": "producto_1", "for_chk": "producto_1",
        "video": "https://www.youtube.com/embed/Mkl7TuvBDb0",
        "description": "Review de ejemplo. Los teléfonos celulares, también conocidos como smartphones, son dispositivos electrónicos portátiles diseñados para la comunicación móvil. A lo largo de los años, han evolucionado considerablemente en términos de tecnología y funcionalidad."

    },


    2: {
        "id": 2,
        "name": "EcoSync E52S", "marca": "EcoSync",
        "price": 1759.5,
        "image": "img_2.png",
        "id_chk": "producto_2", "for_chk": "producto_2",
        "video": "https://www.youtube.com/embed/nhHcYjl7sCE",
        "description": "Review de ejemplo. Los teléfonos celulares, también conocidos como smartphones, son dispositivos electrónicos portátiles diseñados para la comunicación móvil. A lo largo de los años, han evolucionado considerablemente en términos de tecnología y funcionalidad."
    },

    3: {
        "id": 3,
        "name": "EcoSync T22 64GB", "marca": "EcoSync",
        "price": 839,
        "image": "img_3.png",
        "id_chk": "producto_3", "for_chk": "producto_3",
        "video": "https://www.youtube.com/embed/KWOT9Wvucn4",
        "description": "Review de ejemplo. Los teléfonos celulares, también conocidos como smartphones, son dispositivos electrónicos portátiles diseñados para la comunicación móvil. A lo largo de los años, han evolucionado considerablemente en términos de tecnología y funcionalidad."
    },

    4: {
        "id": 4,
        "name": "NovascX Note 11E", "marca": "NovascX",
        "price": 1259,
        "image": "img_4.png",
        "id_chk": "producto_4", "for_chk": "producto_4",
        "video": "https://www.youtube.com/embed/Gdz11wEz3S4",
        "description": "Review de ejemplo. Los teléfonos celulares, también conocidos como smartphones, son dispositivos electrónicos portátiles diseñados para la comunicación móvil. A lo largo de los años, han evolucionado considerablemente en términos de tecnología y funcionalidad."
    },

    5: {
        "id": 5,
        "name": "NovascX Note 10U", "marca": "NovascX",
        "price": 1119,
        "image": "img_5.png",
        "id_chk": "producto_5", "for_chk": "producto_5",
        "video": "https://www.youtube.com/embed/7qnicWeA_pI",
        "description": "Review de ejemplo. Los teléfonos celulares, también conocidos como smartphones, son dispositivos electrónicos portátiles diseñados para la comunicación móvil. A lo largo de los años, han evolucionado considerablemente en términos de tecnología y funcionalidad."
    },

    6: {
        "id": 6,
        "name": "NovascX 11YE", "marca": "NovascX",
        "price": 2589.5,
        "image": "img_6.png",
        "id_chk": "producto_6", "for_chk": "producto_6",
        "video": "https://www.youtube.com/embed/wfz9W6wGFlc",
        "description": "Review de ejemplo. Los teléfonos celulares, también conocidos como smartphones, son dispositivos electrónicos portátiles diseñados para la comunicación móvil. A lo largo de los años, han evolucionado considerablemente en términos de tecnología y funcionalidad."
    },


    7: {
        "id": 7,
        "name": "PulsetTech GTX Master Full", "marca": "PulsetTech",
        "price": 1949,
        "image": "img_7.png",
        "id_chk": "producto_7", "for_chk": "producto_7",
        "video": "https://www.youtube.com/embed/kTOWWS1yZ_g",
        "description": "Review de ejemplo. Los teléfonos celulares, también conocidos como smartphones, son dispositivos electrónicos portátiles diseñados para la comunicación móvil. A lo largo de los años, han evolucionado considerablemente en términos de tecnología y funcionalidad."
    },

    8: {
        "id": 8,
        "name": "PulsetTech C26E", "marca": "PulsetTech",
        "price": 579,
        "image": "img_8.png",
        "id_chk": "producto_8", "for_chk": "producto_8",
        "video": "https://www.youtube.com/embed/EASx4Ev4XcA",
        "description": "Review de ejemplo. Los teléfonos celulares, también conocidos como smartphones, son dispositivos electrónicos portátiles diseñados para la comunicación móvil. A lo largo de los años, han evolucionado considerablemente en términos de tecnología y funcionalidad."

    }

}

// INSERTAR PRODUCTOS EN LA PAGINA
const contenedor_prod = document.getElementById('contenedor_prod_html');
pagina = ""
for (const prod_item of Object.values(productos_html)) {
    pagina = pagina + `
                    <!-- ITEM SELECCIONADO -->
                    <div class="col mb-4">
                        <div class="card h-100">

                            <!-- roduct image-->
                            <img class="card-img-top prod-image"
                                src="assets/${prod_item["image"]}" alt="..." />

                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${prod_item["name"]}</h5>
                                    <!-- Product price-->
                                    s/ ${prod_item["price"]}
                                </div>
                            </div>

                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="form-check">
                                    <input class="form-check-input select_btn_p" 
                                            type="checkbox" value="" id="${prod_item['id_chk']}" 
                                            onclick=evento_boton_prod(`+ prod_item['id'] + `)>
                                    <label class="form-check-label" for="${prod_item['for_chk']}">
                                        Agregar a compra.
                                    </label>
                                </div>

                                <div class="d-grid gap-2 pt-2">
                                    <button class="btn btn-outline-dark mt-autoy select_btn_car" type="button"
                                    onclick=evento_boton_car(`+ prod_item['id'] + `)>Detalles</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
}
contenedor_prod.innerHTML = pagina


// LISTA DE PRODUCTOS SELECCIONADOS
productos_agregados = {}

// OBTENER ETIQUETAS PRINCIPALES
const list_productos_doc = document.getElementById('listado_productos_html');
const precio_total_doc = document.getElementById('precio_total');

// ETIQUETAS DEL MODAL
const titulo = document.getElementById('modal_titulo_html');
const texto = document.getElementById('modal_texto_html');
const video = document.getElementById('modal_video_html');
const btn_cerrar_1 = document.getElementById("cerrar_modal_x");
const btn_cerrar_2 = document.getElementById("cerrar_modal_btn");

// SINCRONIZAR BOTONES
/* agregar */
const btn_sel = document.querySelector(".select_btn_p");
function evento_boton_prod(id) {
    actualizar_lista_productos(id, productos_html[id]);

}
/* detalle */
const btn_car = document.querySelector(".select_btn_car");
function evento_boton_car(id) {
    mapear_caracteristicas(id);

}

/* cerra modal */
btn_cerrar_1.onclick = function (e) {
    video.setAttribute("src", "https://www.youtube.com/embed/")
};

btn_cerrar_2.onclick = function (e) {
    video.setAttribute("src", "https://www.youtube.com/embed/")
};


// AGREGAR CARGARTERISTICAS
function mapear_caracteristicas(id) {

    video.setAttribute("src", productos_html[id]["video"])
    titulo.textContent=productos_html[id]["name"]
    texto.textContent=productos_html[id]["description"]


    modal_detalles = new bootstrap.Modal(document.getElementById('modal_detalles_html'))
    modal_detalles.show()


}


// VALIDA EXISTENCIA DEL ID
function validar_data_id_producto(id) {

    listado = Object.keys(productos_agregados);
    encontrado = false;

    for (key in listado) {
        // 
        if (id == listado[key]) { encontrado = true };
    }
    return encontrado;

}

// ELIMINAR / CREA - DICCIONARIO PRODUCTOS
function actualizar_lista_productos(inset_id, intert_valores) {

    // VALIDA Y MODIFICA DICCIONARIO
    if (validar_data_id_producto(inset_id)) { delete productos_agregados[inset_id] }
    else { productos_agregados[inset_id] = intert_valores }

    console.log(productos_agregados);

    actualizar_html_list();
}


// OBTIENE DATOS Y ACTUALIZA HTML
function actualizar_html_list() {

    let contado = 0

    // limpia el html
    list_productos_doc.innerHTML = '';
    pagina = ""
    // crea fragmento hmtl
    const fragment = document.createDocumentFragment()
    for (key in productos_agregados) {

        // EXTRAE VALORES
        producto = productos_agregados[key]

        // CREAR TAG LI
        pagina = pagina + `
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">${producto["name"]}</div>
                                Marca: ${producto["marca"]}
                            </div>
                            <span class="badge bg-primary rounded-pill">s/ ${producto["price"]}</span>
                        </li>
                        `

        // CALCULA
        contado = producto["price"] + contado;
    }

    // agrega el fragmento con los list
    list_productos_doc.innerHTML = pagina

    // CALCULAR TODO
    precio = Math.round(contado)
    precio_total_doc.setAttribute('value', "s/ " + precio)

}



