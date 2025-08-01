import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema({
    name: String,
    frequency: { type: String, enum: ['daily', 'weekly'], default: 'daily' },
    streak: { type: Number, default: 0 },
    lastCheckIn: Date
});

export default mongoose.model('Habit', habitSchema);