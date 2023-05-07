import express from 'express';
import { obtenerMotorista, obtenerMotoristas, crearMotorista, añadirPedido, obtenerpendientes, cambiarEstado, añadirOrdenMotorista } from '../controllers/motoristas.controller';

const router = express.Router();

router.get('/', obtenerMotoristas);
router.get('/:id', obtenerMotorista)
router.post('/', crearMotorista);
router.put('/:id/pedidos', añadirPedido);
router.get('/moto/pen', obtenerpendientes);
router.put('/estado/:id', cambiarEstado);
router.put('/:id/:idProducto', añadirOrdenMotorista);

export default router;