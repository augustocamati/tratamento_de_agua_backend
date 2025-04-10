import express from 'express';
import { listarConsumo, registrarConsumo } from '../controllers/consumoController.js';

const router = express.Router();

router.post('/', registrarConsumo);
router.get('/', listarConsumo);

export default router;
