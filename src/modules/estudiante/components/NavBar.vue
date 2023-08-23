<template>
  <div>
    <router-link to="/">Bienvenido</router-link>
    <router-link to="/nuevo">Consultar Estudiante</router-link>
    <router-link to="/guardar">Guardar Estudiante</router-link>
    <router-link to="/actualizar">Actualizar Estudiante</router-link>
    <router-link to="/eliminar">Eliminar Estudiante</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style >
div {
  padding: 10px;
}
div a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 50px;
  padding: 10px;
  background-color: rgb(166, 209, 166);
}
</style>
