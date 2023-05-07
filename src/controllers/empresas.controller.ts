import { Request, Response } from "express";
import { Empresaschema } from "../models/empresa.schema";

export const obtenerEmpresa = (req:Request, res:Response) => {
    Empresaschema.findById(req.params.id)
    .then( resultado => {
        res.send(resultado);
        res.end();
    })
    .catch( resultado => {
        res.send(resultado);
        res.end();
    })
}

export const obtenerEmpresas = (req:Request, res:Response) => {
    Empresaschema.find()
    .then( resultado => {
        res.send(resultado);
        res.end();
    })
    .catch( resultado => {
        res.send(resultado);
        res.end();
    })
}

export const crearEmpresa = (req: Request, res: Response) => {
    const { nombre, imagen, descripcion, productos, telefono, region } = req.body;

    const nuevaEmpresa = new Empresaschema({
        nombre,
        imagen,
        descripcion,
        productos,
        telefono,
        region
    });

    nuevaEmpresa.save()
        .then(resultado => {
            res.send(resultado);
            res.end();
        })
        .catch(resultado => {
            res.send(resultado);
        })
}

export const añadirProductoEmpresa = (req: Request, res: Response) => {
    Empresaschema.findById(req.params.id)
    .then(empresa => {
        if(empresa){
            empresa.productos.push(req.body.producto);
            empresa.save()
            .then(result => res.send(result))
            .catch(error => console.log(error));
        }
    })
    .catch(error => console.log(error));

}

export const eliminarEmpresa = (req:Request, res:Response) =>{
    Empresaschema.deleteOne({_id: req.params.id})
    .then(respuesta =>{
        res.send("empresa elimanda exitosamente");
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    })
}
