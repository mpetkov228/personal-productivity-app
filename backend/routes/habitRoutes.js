import express from 'express';

import auth from '../middleware/authMiddleware.js';
import { createHabit, deleteHabit, getHabits, updateHabit } from '../controllers/habitController.js';

const router = express.Router();

router.use(auth);
router.get('/', getHabits);
router.post('/', createHabit);
router.put('/:id', updateHabit);
router.delete('/:id', deleteHabit);

export default router;