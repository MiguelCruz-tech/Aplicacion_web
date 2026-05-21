import { Schema, model } from "mongoose"; //Schena es el esqueleto (0 campos) de la tabla y el modelo ya es la tabla

const EschemaAlumnos = new Schema({ //Creacion de tabla en base de datos
    nombre: String,
    calificacion: Number,
    Materia: String

})

export const TablaAlumnos = new model("Tabla de alumnos reprobados", EschemaAlumnos) //Exportamos el modelo para poder usarlo en otros archivos, el primer parametro es el nombre de la tabla y el segundo parametro es el esquema que se va a usar para esa tabla