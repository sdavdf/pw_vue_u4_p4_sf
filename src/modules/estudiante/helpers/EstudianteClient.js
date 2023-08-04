import axios from "axios";

export const obtenerEstudianteFachada = async (cedula) => {
  console.log('Axios');
  return await obtenerEstudianteAPIAxios(cedula);
};

export const ingresarEstudianteFachada = (bodyEstudiante) => {
  console.log('Estudiante insertado');
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
    `http://localhost:8081/API/1.0/Matricula/estudiantes/${cedula}`
  ).then((r) => r.json());
  console.log(data);
  return data;
};

const obtenerEstudianteAPIAxios = async(cedula) => {
  console.log('Axios 2');
  const data = axios.get(`http://localhost:8081/API/1.0/Matricula/estudiantes/${cedula}`).then(r=>r.data);

  console.log(data);
  return data;
};

const ingresarEstudiante = (bodyEstudiante) =>{
  const data = axios.post(`http://localhost:8081/API/1.0/Matricula/estudiantes`, bodyEstudiante).then(r=> r.data);
  console.log(data);
  return data;
}

const actualizarEstudiante = (bodyEstudiante, id) => {
  axios.put(`http://localhost:8081/API/1.0/Matricula/estudiantes/${id}`, bodyEstudiante).then(r=> r.data);
};

const eliminarEstudiante = (id) => {
  axios.delete(`http://localhost:8081/API/1.0/Matricula/estudiantes/${id}`).then(r=> r.data);
};