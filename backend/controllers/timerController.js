import Timer from '../models/Timer.js';

const activeTimers = new Map();

export const startTimer = async (req, res) => {
    const userId = req.userId;
    const { taskId } = req.body;
    activeTimers.set(userId, { taskId, startTime: new Date() });
    res.json({ message: 'Timer started' });
};

export const endTimer = async (req, res) => {
    const userId = req.userId;
    const data = activeTimers.get(userId);
    if (!data) {
        return res.status(404).json({ error: 'No active timers' });
    }

    const endTime = new Date();
    const duration = Math.floor((endTime - data.startTime) / 1000);
    const timer = await Timer.create({
        userId,
        taskId: data.taskId,
        startTime: data.startTime,
        endTime,
        duration
    });

    activeTimers.delete(userId);
    res.json(timer);
};