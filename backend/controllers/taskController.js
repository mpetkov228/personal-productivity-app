import Task from '../models/Task.js';

export const createTask = async (req, res) => {
    const { title, description, status, dueDate } = req.body;

    try {
        await Task.create({ title, description, status, dueDate, userId: req.userId });
        res.status(201).json({ message: 'task created' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.json(tasks);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const updateTask = async (req, res) => {
    const id = req.params.id;
    const { title, description, status } = req.body;

    try {
        await Task.findByIdAndUpdate(id, { title, description, status });
        res.status(200).json({ message: "task updated" });
    } catch (err) {
        res.status(404).json({ error: "task not found" });
    }
};

export const deleteTask = async (req, res) => {
    const id = req.params.id;

    try {
        await Task.findByIdAndDelete(id);
        res.json({ message: "task deleted" });
    } catch (err) {
        res.status(400).json({ error: "failed to delete task" });
    }
};