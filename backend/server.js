import express from 'express';
import dotenv from 'dotenv';


dotenv.config()
const app = express();


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/users', (req, res) => {
    res.send('Here are your users.');
});


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});