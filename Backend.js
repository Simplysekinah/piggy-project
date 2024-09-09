const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors")

app.use(cors())
app.use(express.urlencoded())
app.get('http://localhost:3000/config', (req, res) => {
    res.json({ apiUrl: process.env.API_URL });
});

app.listen(3000, () => console.log('Server running on port 3000'));
