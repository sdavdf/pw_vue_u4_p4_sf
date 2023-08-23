import axios from "axios";

export const obtenerEstudianteFachada = async (cedula) => {
  console.log('Axios');
  return await obtenerEstudianteAPIAxios(cedula);
};

export const ingresarEstudianteFachada = (bodyEstudiante) => {
  ingresarEstudiante(bodyEstudiante);
};

export const actualizarEstudianteFachada = (bodyEstudiante, id) => {
  actualizarEstudiante(bodyEstudiante,id);
};

export const eliminarEstudianteFachada = (id) => {
  eliminarEstudiante(id);
};

const obtenerEstudianteAPI = async (cedula) => {
  const data = await fetch(
    `http://localhost:8082/API/1.0/Matricula/estudiantes/${cedula}`
  ).then((r) => r.json());
  console.log(data);
  return data;
};

const obtenerEstudianteAPIAxios = async(cedula) => {

  const headers= {

  "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZHZpZCIsImlhdCI6MTY5MjgzMTM1NywiZXhwIjoxNjkyODMyMzU3fQ.Q9e9an2UxHkVyyCrc5CA5W5p_3LFKomMnnWrXj_X84hzPNd1hWhQNd3yOAGx1qFDIH7XbjYbqEZ7O7Lpn-uNoQ",
    
  "Mensaje": "Valor1"
    
  }

  console.log('Axios 2');
  const data = axios.get(`http://localhost:8082/API/1.0/Matricula/estudiantes/${cedula}`, {headers: headers}).then(r=>r.data);

  console.log(data);
  return data;
};

const ingresarEstudiante = (bodyEstudiante) =>{
  const headers= {
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZHZpZCIsImlhdCI6MTY5MjgzMTM1NywiZXhwIjoxNjkyODMyMzU3fQ.Q9e9an2UxHkVyyCrc5CA5W5p_3LFKomMnnWrXj_X84hzPNd1hWhQNd3yOAGx1qFDIH7XbjYbqEZ7O7Lpn-uNoQ",
    "Mensaje": "Valor1"
}

  axios.post(`http://localhost:8082/API/1.0/Matricula/estudiantes`, bodyEstudiante, {headers: headers}).then(r=> r.data);
}

const actualizarEstudiante = (bodyEstudiante, id) => {
  const headers= {
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZHZpZCIsImlhdCI6MTY5MjgzMTM1NywiZXhwIjoxNjkyODMyMzU3fQ.Q9e9an2UxHkVyyCrc5CA5W5p_3LFKomMnnWrXj_X84hzPNd1hWhQNd3yOAGx1qFDIH7XbjYbqEZ7O7Lpn-uNoQ",
    "Mensaje": "Valor1"
}

  axios.put(`http://localhost:8082/API/1.0/Matricula/estudiantes/${id}`, bodyEstudiante, {headers: headers}).then(r=> r.data);
};

const eliminarEstudiante = (id) => {
  const headers= {
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZHZpZCIsImlhdCI6MTY5MjgzMTM1NywiZXhwIjoxNjkyODMyMzU3fQ.Q9e9an2UxHkVyyCrc5CA5W5p_3LFKomMnnWrXj_X84hzPNd1hWhQNd3yOAGx1qFDIH7XbjYbqEZ7O7Lpn-uNoQ",
    "Mensaje": "Valor1"
}

  axios.delete(`http://localhost:8082/API/1.0/Matricula/estudiantes/${id}`, {headers: headers}).then(r=> r.data);
};