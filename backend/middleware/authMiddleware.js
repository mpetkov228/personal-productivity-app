import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        req.userId = decodedToken.id;
        next();
    } catch (err) {
        res.status(401).json({ error: 'invalid token' });
    }
};

export default auth;