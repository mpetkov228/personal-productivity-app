import Habit from "../models/Habit.js";

export const getHabits = async (req, res) => {
    const habits = await Habit.find({ userId: req.userId });
    res.json(habits);
};

export const createHabit = async (req, res) => {
    try {
        await Habit.create({ ...req.body, userId: req.userId });
        res.status(201).json({ message: 'Habit created' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const updateHabit = async (req, res) => {
    const id = req.params.id;

    try {
        const updated = await Habit.findOneAndUpdate(
            { _id: id }, 
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteHabit = async (req, res) => {
    const id = req.params.id;

    try {
        await Habit.findOneAndDelete({ _id: id, userId: req.userId });
        res.status(200).json({ message: 'Habit deleted' });
    } catch (err) {
        res.status(400).json({ error: 'Deletion failed' });
    }
};
