import bcrypt from 'bcryptjs';

import User from '../models/User.js';

export const register = async (req, res) => {
    const { email, username, password } = req.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    try {
        await User.create({ email, username, password: passwordHash });
        res.status(201).json({ message: "user created" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ error: 'Invalid email or password!' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(400).json({ error: 'Invalid email or password!' });
    }

    res.json({ message: 'You are logged in!' });
};