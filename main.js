document.addEventListener("DOMContentLoaded", () => {
  // 1. CONTADOR DE AÑOS DINÁMICO
  const contadorAnios = document.getElementById("contador-anios");
  if (contadorAnios) {
    const anioInicio = 1976;
    const anioActual = new Date().getFullYear();
    const aniosTranscurridos = anioActual - anioInicio;
    contadorAnios.textContent = `A ${aniosTranscurridos} años del golpe, seguimos exigiendo Verdad y Justicia.`;
  }

  // 2. BUSCADOR EN TIEMPO REAL PARA TESTIMONIOS
  const buscador = document.getElementById("buscador");
  const testimonios = document.querySelectorAll(".testimonio");

  if (buscador) {
    buscador.addEventListener("input", (e) => {
      const textoBusqueda = e.target.value.toLowerCase().trim();

      testimonios.forEach((testimonio) => {
        const textoCard = testimonio.querySelector(".card-text").textContent.toLowerCase();
        
        // Muestra u oculta la columna según coincida el texto
        if (textoCard.includes(textoBusqueda)) {
          testimonio.classList.remove("d-none");
        } else {
          testimonio.classList.add("d-none");
        }
      });
    });
  }

  // 3. GENERADOR DE TARJETA CONMEMORATIVA
  const btnGenerar = document.getElementById("btn-generar");
  const inputMensaje = document.getElementById("mensaje-tarjeta");
  const resultadoTarjeta = document.getElementById("tarjeta-resultado");

  if (btnGenerar && inputMensaje && resultadoTarjeta) {
    btnGenerar.addEventListener("click", () => {
      const mensaje = inputMensaje.value.trim();

      if (mensaje === "") {
        alert("Por favor, escribí un mensaje para tu tarjeta.");
        return;
      }

      // Estructura visual de la tarjeta con clases de Bootstrap y estilos sutiles
      resultadoTarjeta.innerHTML = `
        <div class="card bg-dark text-white border-light my-3 animate__animated animate__fadeIn mx-auto" style="max-width: 450px; border-radius: 12px;">
          <div class="card-body p-4 text-center">
            <span class="fs-3">🕊️</span>
            <blockquote class="blockquote my-3">
              <p class="fs-5 italic">"${mensaje}"</p>
            </blockquote>
            <figcaption class="blockquote-footer text-muted mt-2">
              50 años de Memoria, Verdad y Justicia
            </figcaption>
          </div>
        </div>
      `;

      // Limpia el campo después de generar la tarjeta
      inputMensaje.value = "";
    });
  }

  // BONUS: MENSAJE DEL FORMULARIO DE ADHESIÓN (OPCIONAL)
  const formAdhesion = document.getElementById("form-adhesion");
  const msgAdhesion = document.getElementById("msg-adhesion");

  if (formAdhesion && msgAdhesion) {
    formAdhesion.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombre-adhesion").value.trim();
      
      if (nombre !== "") {
        msgAdhesion.className = "mt-3 text-success fw-bold";
        msgAdhesion.textContent = `¡Gracias por sumarte, ${nombre}! Tu compromiso mantiene viva la memoria.`;
        formAdhesion.reset();
      }
    });
  }
});