import express from 'express';

import { createTask, getTasks, updateTask } from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/create', createTask);
router.put('/update/:id', updateTask);

export default router;