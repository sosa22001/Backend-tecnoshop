"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const motoristas_controller_1 = require("../controllers/motoristas.controller");
const router = express_1.default.Router();
router.get('/', motoristas_controller_1.obtenerMotoristas);
router.get('/:id', motoristas_controller_1.obtenerMotorista);
router.post('/', motoristas_controller_1.crearMotorista);
router.put('/:id/pedidos', motoristas_controller_1.añadirPedido);
router.get('/moto/pen', motoristas_controller_1.obtenerpendientes);
router.put('/estado/:id', motoristas_controller_1.cambiarEstado);
router.put('/:id/:idProducto', motoristas_controller_1.añadirOrdenMotorista);
exports.default = router;
