import express from 'express';
import { obtenerEmpresa, obtenerEmpresas, crearEmpresa, añadirProductoEmpresa, eliminarEmpresa } from '../controllers/empresas.controller';

const router = express.Router();

router.get('/', obtenerEmpresas);
router.get('/:id', obtenerEmpresa);
router.post('/', crearEmpresa);
router.put('/:id', añadirProductoEmpresa);
router.delete('/:id', eliminarEmpresa);

export default router;