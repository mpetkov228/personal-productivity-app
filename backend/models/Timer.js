import mongoose from 'mongoose';

const timerSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
    startTime: Date,
    endTime: Date,
    duration: Number // in seconds
});

export default mongoose.model('Timer', timerSchema);