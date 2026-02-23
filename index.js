const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');

const app = express();
const port = 8000;

app.use(bodyParser.json());

let conn = null;

const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8820
    });
};

// GET /users
app.get('/users', async (req, res) => {
    try {
        const result = await conn.query('SELECT * FROM users');
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST /users
app.post('/users', async (req, res) => {
    try {
        let user = req.body;
        const result = await conn.query('INSERT INTO users SET ?', user);
        res.json({
            message: 'User added successfully',
            data: result[0]
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error adding user',
            error: error.message
        });
    }
});

// GET /users/:id
app.get('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const result = await conn.query('SELECT * FROM users WHERE id = ?', [id]);

        if (result[0].length === 0) {
            throw { statusCode: 404, message: `User with id ${id} not found` };
        }

        res.json({
            message: `User with id ${id} fetched successfully`,
            data: result[0][0]
        });
    } catch (error) {
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: 'Error fetching user',
            error: error.message
        });
    }
});

// PUT /users/:id
app.put('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let updatedUser = req.body;

        const result = await conn.query(
            'UPDATE users SET ? WHERE id = ?',
            [updatedUser, id]
        );

        if (result[0].affectedRows === 0) {
            throw { statusCode: 404, message: `User with id ${id} not found` };
        }

        res.json({
            message: `User with id ${id} updated successfully`
        });
    } catch (error) {
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: 'Error updating user',
            error: error.message
        });
    }
});

// DELETE /users/:id
app.delete('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;

        const result = await conn.query(
            'DELETE FROM users WHERE id = ?',
            [id]
        );

        if (result[0].affectedRows === 0) {
            throw { statusCode: 404, message: `User with id ${id} not found` };
        }

        res.json({
            message: `User with id ${id} deleted successfully`
        });
    } catch (error) {
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: 'Error deleting user',
            error: error.message
        });
    }
});

app.listen(port, async () => {
    await initMySQL();
    console.log(`Server is running on port ${port}`);
});