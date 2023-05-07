import mongoose from "mongoose";

export interface IMotorista {
    primerNombre: string;
    primerApellido: string;
    email: string;
    contraseña: String,
    telefono: string;
    aprobado: Boolean;
    carro: string;
    moto: string;
    añosDeExperiencia: Number;
    pedidosEntregados: Array<mongoose.Types.ObjectId>;
}