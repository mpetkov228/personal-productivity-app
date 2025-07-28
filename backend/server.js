const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/users', (req, res) => {
    res.send('Here are your users.');
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});