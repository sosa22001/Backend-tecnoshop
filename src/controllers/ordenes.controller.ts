import { Request, Response, response } from "express";
import { OrdenesSchema } from "../models/orden.schema";

export const obtenerOrden = (req: Request, res: Response) => {
    OrdenesSchema.findById(req.params.id)
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
};

export const obtenerOrdenCompleta = (req: Request, res: Response) => {
    OrdenesSchema.find()
    .populate('usuario')
    .populate('producto')
    .then(response =>     res.send(response)
    )
};

export const obtenerOrdenes = (req: Request, res: Response) => {
    OrdenesSchema.find()
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
};

export const obtenerOrdenesDeUsuario = (req: Request, res: Response) => {
    OrdenesSchema.find({ usuario: req.params.id })
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
};

export const crearOrden = (req: Request, res: Response) => {
    const calculoImpuesto = (req.body.total * req.body.cantidad * 0.1);
    const total = ((parseFloat(req.body.total) * req.body.cantidad) + calculoImpuesto);

    const nuevaOrden = new OrdenesSchema({
        usuario: req.body.usuario,
        producto: req.body.producto,
        cantidad: req.body.cantidad,
        total: total,
        impuesto: calculoImpuesto,
        fecha: new Date().toLocaleTimeString()
    });

    nuevaOrden.save()
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
};

export const asignar = (req:Request,res:Response) =>{
    OrdenesSchema.updateOne({_id: req.params.id},
    {
        $set: {
            "status": req.body.estado
        }
    }).then( resultado=>{
        res.send("Se cambió de estado de una orden");
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    })
};