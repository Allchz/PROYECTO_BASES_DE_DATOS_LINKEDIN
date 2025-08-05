let contador = 0;

function agregarSeccion() {
  contador++;
  const container = document.getElementById('secciones-container');

  const nuevaSeccion = document.createElement('div');
  nuevaSeccion.className = 'section-box';
  nuevaSeccion.innerHTML = `
    <h5>Puesto ${contador}</h5>
    <div class="mb-3">
      <label class="form-label">Puesto</label>
      <input type="text" class="form-control" name="titulo_${contador}" required>
    </div>
    <div class="mb-3">
      <label class="form-label">Cargo</label>
      <input type="text" class="form-control" name="cargo_${contador}" required>
    </div>
    <div class="mb-3">
      <label class="form-label">Titular Perfil</label>
      <input type="text" class="form-control" name="titular_perfil_${contador}" required>
    </div>
    <div class="mb-3">
      <label class="form-label">Descripción</label>
      <textarea class="form-control" name="descripcion_${contador}" rows="2" required></textarea>
    </div>
    <div class="mb-3">
      <label class="form-label">Actitudes</label>
      <input type="text" class="form-control" name="actitudes_${contador}" required>
    </div>
    <div class="mb-3 row">
      <div class="col">
        <label class="form-label">Fecha de inicio</label>
        <input type="date" class="form-control" name="fecha_inicio_${contador}" required>
      </div>
      <div class="col">
        <label class="form-label">Fecha de fin</label>
        <input type="date" class="form-control" name="fecha_fin_${contador}">
      </div>
    </div>
  `;
  container.appendChild(nuevaSeccion);
}
