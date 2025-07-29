import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: { type: mongoose.ObjectId },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

export default mongoose.model('User', userSchema);