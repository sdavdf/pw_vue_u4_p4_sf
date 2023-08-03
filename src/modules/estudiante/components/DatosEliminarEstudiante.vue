<template>
  <div class="form-container">
    <div class="form-field">
      <label for="id">ID</label>
      <input v-model="id" type="text" id="id" placeholder="Ingrese el ID">
    </div>

    <button class="submit-button" @click="eliminarEstudiante">Eliminar</button>
  </div>
</template>

<script>
import { eliminarEstudianteFachada } from "../helpers/EstudianteClient.js";

export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {
    async eliminarEstudiante() {
      await eliminarEstudianteFachada(this.id);
      // Puedes realizar otras acciones aquí después de eliminar al estudiante, como mostrar un mensaje de éxito.
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-field {
  margin-bottom: 20px;
}

.form-field label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-field input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.submit-button {
  background-color: #e74c3c;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #c0392b;
}

.submit-button:active {
  background-color: #a5281b;
}
</style>
