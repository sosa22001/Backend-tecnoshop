import express from 'express';
import { obtenerUsuario, obtenerUsuarios, crearUsuario, añadirMiCarrito, añadirMiListaDeDeseos, obtenerUsuarioPorId, eliminarProductoCarrito, eliminarProductoListaDeseos, añadirOrden, eliminarCarrito, eliminarOrdenes } from '../controllers/usuarios.controller';

const router = express.Router();

router.get('/', obtenerUsuario);
router.post('/', crearUsuario);
router.get('/:id', obtenerUsuarioPorId);
router.put('/:id/carrito', añadirMiCarrito);
router.put('/:id/ordenes', añadirOrden);
router.put('/:id/eliminar-de-carrito', eliminarProductoCarrito);
router.put('/:id/eliminar-de-lista-deseos', eliminarProductoListaDeseos);
router.put('/:id/lista-deseos', añadirMiListaDeDeseos);
router.put('/:id/eliminar-carrito', eliminarCarrito);
router.put('/:id/eliminar-ordenes', eliminarOrdenes);

export default router;