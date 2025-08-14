/* Publicacion Inicio */
function agregarComentario() {
  const input = document.getElementById("nuevoComentario");
  const texto = input.value.trim();
  if (texto === "") return;

  const contenedor = document.getElementById("comentarios");

  const nuevo = document.createElement("div");
  nuevo.classList.add("d-flex", "mb-2");
  nuevo.innerHTML = `
    <img src="imagenes/65cff24e18a33e51eda1fc67_Blog - Fotografía de marca personal para tu sitio web y material promocional_TT.jpg" class="rounded-circle me-2" width="35" height="35">
    <div>
      <strong>Tú</strong>
      <p class="mb-1">${texto}</p>
    </div>
  `;

  contenedor.appendChild(nuevo);
  input.value = "";
}