import express from 'express';

import { createTask, deleteTask, getTasks, updateTask } from '../controllers/taskController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(auth);
router.get('/', getTasks);
router.post('/create', createTask);
router.put('/update/:id', updateTask);
router.delete('/delete/:id', deleteTask);

export default router;