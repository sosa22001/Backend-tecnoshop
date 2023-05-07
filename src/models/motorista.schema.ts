import mongoose, { Schema } from "mongoose";
import { IMotorista } from "./motorista.model";

const schema = new Schema<IMotorista>({
    primerNombre: String,
    primerApellido: String,
    email: String,
    contraseña: String,
    telefono: String,
    añosDeExperiencia: Number,
    aprobado: Boolean,
    carro: String,
    moto: String,
    pedidosEntregados: Array<Schema.Types.ObjectId>
})

export const MotoristaSchema = mongoose.model('motoristas', schema);