// Vue script
PetiteVue.createApp({
  registros: [],
  registroActual: {},
  fetchRegistros() {
    fetch("/api/registros")
      .then((response) => response.json())
      .then((data) => (this.registros = data));
  },
  crearRegistro() {
    fetch("/api/registros", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.registroActual),
    }).then(() => {
      this.registroActual = {};
      this.fetchRegistros();
    });
  },
  editar(registro) {
    this.registroActual = { ...registro };
  },
  actualizarRegistro() {
    fetch(`/api/registros/${this.registroActual.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.registroActual),
    }).then(() => {
      this.registroActual = {};
      this.fetchRegistros();
    });
  },
  eliminar(id) {
    fetch(`/api/registros/${id}`, {
      method: "DELETE",
    }).then(() => this.fetchRegistros());
  },
}).mount("#app");

// Llamar los registros al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  PetiteVue.app.fetchRegistros();
});
