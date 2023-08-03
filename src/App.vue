<template>
  <NavBar />
  <router-view />
</template>
 
  
 
 <script>
import NavBar from "./modules/estudiante/components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar
  },
};
</script>
 
  
 
 <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;

  -moz-osx-font-smoothing: grayscale;

  text-align: center;

  color: #2c3e50;

  

  margin: 60px;
}
</style>