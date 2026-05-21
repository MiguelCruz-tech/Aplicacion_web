import { TablaAlumnos } from "../alumnos.model.js";

TablaAlumnos.create({
    nombre: "Panfilo",
    calificacion: 5,
    Materia: "Matematicas"
})
export const test = () => console.log("Si se esta llamando correctamente al controlador")