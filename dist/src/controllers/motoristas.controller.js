"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerMotorista = exports.añadirOrdenMotorista = exports.cambiarEstado = exports.obtenerpendientes = exports.añadirPedido = exports.crearMotorista = exports.obtenerMotoristas = void 0;
const motorista_schema_1 = require("../models/motorista.schema");
const obtenerMotoristas = (req, res) => {
    motorista_schema_1.MotoristaSchema.find()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.obtenerMotoristas = obtenerMotoristas;
const crearMotorista = (req, res) => {
    const { primerNombre, primerApellido, contraseña, email, añosDeExperiencia, telefono, aprobado, carro, moto } = req.body;
    const nuevoMotorista = new motorista_schema_1.MotoristaSchema({
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
    });
};
exports.crearMotorista = crearMotorista;
const añadirPedido = (req, res) => {
    motorista_schema_1.MotoristaSchema.findById(req.params.id)
        .then(motorista => {
        if (motorista) {
            motorista.pedidosEntregados.push(req.body.id);
            motorista.save()
                .then(result => res.send(result))
                .catch(error => console.log(error));
        }
    })
        .catch(error => console.log(error));
};
exports.añadirPedido = añadirPedido;
const obtenerpendientes = (req, res) => {
    motorista_schema_1.MotoristaSchema.find({ aprobado: false })
        .then(respuesta => {
        res.send(respuesta);
        res.end();
    })
        .catch(error => {
        res.send(error);
        res.end();
    });
};
exports.obtenerpendientes = obtenerpendientes;
const cambiarEstado = (req, res) => {
    motorista_schema_1.MotoristaSchema.updateOne({ _id: req.params.id }, {
        $set: {
            "aprobado": req.body.estado
        }
    }).then(resultado => {
        res.send("Se cambió de estado a un motorista");
        res.end();
    })
        .catch(error => {
        res.send(error);
        res.end();
    });
};
exports.cambiarEstado = cambiarEstado;
const añadirOrdenMotorista = (req, res) => {
    motorista_schema_1.MotoristaSchema.findById(req.params.id)
        .then(usuario => {
        if (usuario) {
            usuario.pedidosEntregados.push(req.body.idProducto);
            usuario.save()
                .then(result => res.send(result))
                .catch(error => console.log(error));
        }
    })
        .catch(error => console.log(error));
};
exports.añadirOrdenMotorista = añadirOrdenMotorista;
const obtenerMotorista = (req, res) => {
    motorista_schema_1.MotoristaSchema.findOne({ email: req.query.email, contraseña: req.query.contraseña, aprobado: true })
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.obtenerMotorista = obtenerMotorista;
