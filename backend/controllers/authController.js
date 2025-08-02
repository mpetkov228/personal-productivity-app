import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
        return res.status(401).json({ error: 'Invalid email or password!' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
        return res.status(401).json({ error: 'Invalid email or password!' });
    }

    const secretKey = process.env.SECRET_KEY;
    const payload = {
        id: user._id,
        email: user.email,
        username: user.username,
        password: user.password
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1d' });

    res.status(200).json({
        message: 'User is logged in!',
        token
    });
};