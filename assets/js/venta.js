import propiedadesVenta from "./data/propiedades_venta.js";

const mostrarPropiedades = (propiedades, containerId) => {
  const container = document.getElementById(containerId);

  propiedades.forEach((propiedad) => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    const cardContent = `
          <div class="card h-100 " style="width: 18rem;">
          <h5 class="card-title text-center p-2">${propiedad.encabezado}</h5>
          <div class="ratio-container">
              <img src="${
                propiedad.src
              }" class="card-img-top rounded p-2" alt="${propiedad.encabezado}">
          </div>
          <div class="card-body">
              <p class="card-text text-center">${propiedad.descripcion}</p>
          </div>
          <ul class="list-group list-group-flush text-center">
              <li class="list-group-item"><i class="fa-solid fa-map-pin me-2"></i>${
                propiedad.direccion
              }</li>
              <li class="list-group-item"><i class="fa-solid fa-bed me-2"></i>${
                propiedad.habitaciones
              }<i class="fa-solid fa-bath ms-2 me-2"></i>${propiedad.baños}</li>
              <li class="list-group-item"><i class="fa-solid fa-money-bill me-2"></i>${propiedad.precio.toLocaleString(
                "CLP"
              )}</li>
              <li class="list-group-item">
              <i class="fa-solid fa-dog me-2"></i>
              <span class="${
                propiedad.mascotas ? "text-success" : "text-danger"
              }">
                  ${propiedad.mascotas ? "Se permite" : "No se permite"}
              </span>
              </li>
          <li class="list-group-item">
              <i class="fa-solid fa-smoking me-2"></i>
              <span class="${propiedad.fumar ? "text-success" : "text-danger"}">
                  ${propiedad.fumar ? "Se permite" : "No se permite"}
              </span>
          </li>
          </ul>
      </div>
          `;

    card.innerHTML = cardContent;
    container.appendChild(card);
  });
};

mostrarPropiedades(propiedadesVenta, "propiedadesVentaContainer");
