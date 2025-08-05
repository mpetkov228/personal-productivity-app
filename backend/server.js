import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

import User from './models/User.js';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import habitRoutes from './routes/habitRoutes.js';
import timerRoutes from './routes/timerRoutes.js';

dotenv.config()
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/habits', habitRoutes);
app.use('/api/timers', timerRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/users', async (req, res) => {
    const data = await User.find({});
    res.json(data);
});

app.get('/protected', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const secretKey = process.env.SECRET_KEY;

    try {
        const decoded = jwt.decode(token, secretKey);
        const email = decoded.email;
        const user = await User.findOne({ email });

        if (user) {
            res.json({ message: `Welcome ${user.username}! This is a protected route.` });
        } else {
            res.status(401).json({ error: 'invalid token' });
        }
    } catch (error) {
        res.status(401).json({ error: 'invalid token' });
    }
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