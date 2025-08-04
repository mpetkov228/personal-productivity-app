import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: String,
    frequency: { type: String, enum: ['daily', 'weekly'], default: 'daily' },
    streak: { type: Number, default: 0 },
    lastCheckIn: { type: Date, default: new Date() }
});

export default mongoose.model('Habit', habitSchema);