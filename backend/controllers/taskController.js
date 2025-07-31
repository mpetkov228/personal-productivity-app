import Task from '../models/Task.js';

export const createTask = async (req, res) => {
    const { title, description, status, dueDate } = req.body;

    try {
        await Task.create({ title, description, status, dueDate });
        res.status(201).json({ message: 'task created' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getTasks = async (req, res) => {
    const tasks = await Task.find({});
    
    res.json(tasks);
};