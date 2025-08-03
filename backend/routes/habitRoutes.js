import express from 'express';

import auth from '../middleware/authMiddleware.js';
import { createHabit, getHabits } from '../controllers/habitController.js';

const router = express.Router();

router.use(auth);
router.get('/', getHabits);
router.post('/', createHabit);

export default router;