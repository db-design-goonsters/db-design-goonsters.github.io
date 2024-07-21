const express = require('express');
const { pool } = require('./services/pool');

const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from 'public' directory

app.get('/get-suppliers', (req, res) => {
    pool.query(`SELECT * FROM Supplier`, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'An error occurred while fetching data' });
        } else {
            res.json(result.rows);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});