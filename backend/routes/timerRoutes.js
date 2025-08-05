import express from 'express';

import auth from '../middleware/authMiddleware.js';
import { endTimer, startTimer } from '../controllers/timerController.js';

const router = express.Router();

router.use(auth);
router.post('/start', startTimer);
router.post('/stop', endTimer);

export default router;