import mongoose, { Schema } from "mongoose";
import { IOrden } from "./orden.model";

const schema = new Schema<IOrden>({
    producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productos'
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    cantidad: Number,
    total: Number,
    impuesto: Number,
    fecha: String,
    status: { type: String, enum: ["Pendiente", "Tomada", "En camino", "En el destino"], default: "Pendiente" }
})

export const OrdenesSchema = mongoose.model('ordenes', schema);
