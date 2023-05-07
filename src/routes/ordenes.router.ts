import express from 'express';
import { obtenerOrden, obtenerOrdenes, crearOrden, asignar,  obtenerOrdenesDeUsuario, obtenerOrdenCompleta } from '../controllers/ordenes.controller';

const router = express.Router();

router.get('/', obtenerOrdenCompleta);
router.get('/usuario/:id', obtenerOrdenesDeUsuario);
router.get('/:id', obtenerOrden);
router.post('/', crearOrden);
router.put('/:id', asignar);

export default router;