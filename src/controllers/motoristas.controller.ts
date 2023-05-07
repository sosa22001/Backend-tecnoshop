import { Request, Response } from "express";
import { trusted } from "mongoose";
import { MotoristaSchema } from "../models/motorista.schema";

export const obtenerMotoristas = (req:Request, res:Response) => {
    MotoristaSchema.find()
    .then(resultado => {
        res.send(resultado);
        res.end();
    })
    .catch(resultado => {
        res.send(resultado);
    })
}

export const crearMotorista = (req: Request, res: Response) => {
    const { primerNombre, primerApellido, contraseña, email, añosDeExperiencia, telefono,aprobado, carro, moto} = req.body;

    const nuevoMotorista = new MotoristaSchema({
        primerNombre,
        primerApellido,
        email,
        contraseña,
        añosDeExperiencia,
        telefono,
        aprobado, 
        carro, 
        moto
    });

    nuevoMotorista.save()
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
}

export const añadirPedido = (req: Request, res: Response) => {
    MotoristaSchema.findById(req.params.id)
    .then(motorista => {
        if (motorista) {
            motorista.pedidosEntregados.push(req.body.id);
            motorista.save()
                .then(result => res.send(result))
                .catch(error => console.log(error));
        }
    })
    .catch(error => console.log(error));
}

export const obtenerpendientes = (req:Request, res:Response) =>{
    MotoristaSchema.find({aprobado:false})
    .then(respuesta=>{
        res.send(respuesta);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    })
}

export const cambiarEstado = (req:Request, res:Response) =>{
    MotoristaSchema.updateOne({_id: req.params.id},
        {
            $set: {
                "aprobado": req.body.estado
            }
    }).then( resultado=>{
        res.send("Se cambió de estado a un motorista");
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    })
}

export const añadirOrdenMotorista = (req:Request, res:Response) =>{
    MotoristaSchema.findById(req.params.id)
        .then(usuario => {
            if (usuario) {
                usuario.pedidosEntregados.push(req.body.idProducto);
                usuario.save()
                    .then(result => res.send(result))
                    .catch(error => console.log(error));
            }
        })
        .catch(error => console.log(error));
}

export const obtenerMotorista = (req:Request, res:Response) => {
        MotoristaSchema.findOne({email: req.query.email, contraseña: req.query.contraseña, aprobado : true})
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
}