import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


dotenv.config()
const app = express();


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/users', (req, res) => {
    res.send('Here are your users.');
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