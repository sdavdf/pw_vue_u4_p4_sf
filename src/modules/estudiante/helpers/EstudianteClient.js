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
    `http://localhost:8081/API/1.0/Matricula/estudiantes/${cedula}`
  ).then((r) => r.json());
  console.log(data);
  return data;
};

const obtenerEstudianteAPIAxios = async(cedula) => {

  const headers= {

  "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZXMiLCJpYXQiOjE2OTI3NDg5NTgsImV4cCI6MTY5Mjc1ODk1OH0.YIyjN4GYqNaIQmr32P4Yr2k1wZbxPtQHtHCV_Jcy9gPI-rDg6FTcdmyhBycGcXEJsn9LNuY45dm_Twi3KnnuBw",
    
  "Mensaje": "Valor1"
    
  }

  console.log('Axios 2');
  const data = axios.get(`http://localhost:8081/API/1.0/Matricula/estudiantes/${cedula}`, {headers: headers}).then(r=>r.data);

  console.log(data);
  return data;
};

const ingresarEstudiante = (bodyEstudiante) =>{
  axios.post(`http://localhost:8081/API/1.0/Matricula/estudiantes`, bodyEstudiante, {headers: headers}).then(r=> r.data);
}

const actualizarEstudiante = (bodyEstudiante, id) => {
  axios.put(`http://localhost:8081/API/1.0/Matricula/estudiantes/${id}`, bodyEstudiante, {headers: headers}).then(r=> r.data);
};

const eliminarEstudiante = (id) => {
  axios.delete(`http://localhost:8081/API/1.0/Matricula/estudiantes/${id}`, {headers: headers}).then(r=> r.data);
};