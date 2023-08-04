<template>
    <h1>Consultar Estudiante</h1>
    <DatosEstudiante/>
  
  </template>
  
   
  
  <script>
  
  import DatosEstudiante from '../components/DatosEstudiante.vue'
  
   
  
  export default {
  
    components: {
  
      DatosEstudiante
  
    },

    mounted() {

    const {cedula}= this.$route.params
    console.log(cedula);
    this.DatosEstudiante
}
   
  
  }
  
  </script>
  
   
  
  <style>
  
   
  
  </style>