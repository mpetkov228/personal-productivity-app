import express from 'express';

import { createTask, deleteTask, getTasks, updateTask } from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/create', createTask);
router.put('/update/:id', updateTask);
router.delete('/delete/:id', deleteTask);

export default router;