document.addEventListener("DOMContentLoaded", function () {
  new Vue({
    el: "#app",
    data: {
      registros: [],
      registroActual: {},
    },
    methods: {
      fetchRegistros() {
        fetch("http://localhost:3000/api/registros")
          .then((response) => response.json())
          .then((data) => {
            this.registros = data;
          })
          .catch((error) =>
            console.error("Error al obtener registros:", error)
          );
      },
      crearRegistro() {
        fetch("http://localhost:3000/api/registros", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.registroActual),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error al crear registro");
            }
            return response.json();
          })
          .then(() => {
            this.registroActual = {};
            this.fetchRegistros();
          })
          .catch((error) => console.error("Error al crear registro:", error));
      },
      editar(registro) {
        this.registroActual = Object.assign({}, registro);
      },
      actualizarRegistro() {
        fetch(`http://localhost:3000/api/registros/${this.registroActual.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.registroActual),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error al actualizar registro");
            }
            return response.json();
          })
          .then(() => {
            this.registroActual = {};
            this.fetchRegistros();
          })
          .catch((error) =>
            console.error("Error al actualizar registro:", error)
          );
      },
      eliminar(id) {
        fetch(`http://localhost:3000/api/registros/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error al eliminar registro");
            }
            return response.json();
          })
          .then(() => this.fetchRegistros())
          .catch((error) =>
            console.error("Error al eliminar registro:", error)
          );
      },
      formatearFecha(fecha) {
        return dayjs(fecha).format("DD/MM/YYYY HH:mm:ss");
      },
    },
    mounted() {
      this.fetchRegistros();
    },
  });
});
