import mongoose from "mongoose";

type Status = "Pendiente" | "Tomada" | "En camino" | "En el destino";

export interface IOrden {
    producto: mongoose.Types.ObjectId;
    usuario: mongoose.Types.ObjectId,
    cantidad: number;
    total: number;
    impuesto: number; 
    fecha: string;
    status: Status, default: "Pendiente";
}
