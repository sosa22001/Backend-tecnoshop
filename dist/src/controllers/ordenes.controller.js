"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asignar = exports.crearOrden = exports.obtenerOrdenesDeUsuario = exports.obtenerOrdenes = exports.obtenerOrdenCompleta = exports.obtenerOrden = void 0;
const orden_schema_1 = require("../models/orden.schema");
const obtenerOrden = (req, res) => {
    orden_schema_1.OrdenesSchema.findById(req.params.id)
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.obtenerOrden = obtenerOrden;
const obtenerOrdenCompleta = (req, res) => {
    orden_schema_1.OrdenesSchema.find()
        .populate('usuario')
        .populate('producto')
        .then(response => res.send(response));
};
exports.obtenerOrdenCompleta = obtenerOrdenCompleta;
const obtenerOrdenes = (req, res) => {
    orden_schema_1.OrdenesSchema.find()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.obtenerOrdenes = obtenerOrdenes;
const obtenerOrdenesDeUsuario = (req, res) => {
    orden_schema_1.OrdenesSchema.find({ usuario: req.params.id })
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.obtenerOrdenesDeUsuario = obtenerOrdenesDeUsuario;
const crearOrden = (req, res) => {
    const calculoImpuesto = (req.body.total * req.body.cantidad * 0.1);
    const total = ((parseFloat(req.body.total) * req.body.cantidad) + calculoImpuesto);
    const nuevaOrden = new orden_schema_1.OrdenesSchema({
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
    });
};
exports.crearOrden = crearOrden;
const asignar = (req, res) => {
    orden_schema_1.OrdenesSchema.updateOne({ _id: req.params.id }, {
        $set: {
            "status": req.body.estado
        }
    }).then(resultado => {
        res.send("Se cambió de estado de una orden");
        res.end();
    })
        .catch(error => {
        res.send(error);
        res.end();
    });
};
exports.asignar = asignar;
