import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

import User from './models/User.js';
import authRoutes from './routes/authRoutes.js';


dotenv.config()
const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/users', async (req, res) => {
    const data = await User.find({});
    res.json(data);
});

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {  
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
    })