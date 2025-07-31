import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    dueDate: Date
});

export default mongoose.model('Task', taskSchema);