<template>
  <div class="form-container">
    <div class="form-field">
      <label for="cedula">Cédula</label>
      <input v-model="cedula" type="text" id="cedula" placeholder="Ingrese su cédula">
    </div>

    <div class="form-field">
      <label for="nombre">Nombre</label>
      <input v-model="nombre" type="text" id="nombre" placeholder="Ingrese su nombre">
    </div>

    <div class="form-field">
      <label for="apellido">Apellido</label>
      <input v-model="apellido" type="text" id="apellido" placeholder="Ingrese su apellido">
    </div>

    <button class="btn btn-lg btn-primary" @click="guardarEstudiante">Guardar</button>
  </div>
</template>

<script>
import { ingresarEstudianteFachada } from "../helpers/EstudianteClient.js";

export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
    };
  },
  methods: {
    async guardarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        provincia: "Pichincha",
      };

      await ingresarEstudianteFachada(data);
    },
  },
};
</script>

<style>
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
  background-color: #3498db;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #1e87d4;
}

.submit-button:active {
  background-color: #0f6db9;
}
</style>
