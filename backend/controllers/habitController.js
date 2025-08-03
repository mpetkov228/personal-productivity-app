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
