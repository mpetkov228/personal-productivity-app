import express from 'express';

const router = express.Router();

router.post('/register', (req, res) => {
    res.json('posting user');
});

export default router;