/**
 * The base server application implmented in Express.
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const DB = require('./api/database.js')
const login = require('./api/login.js')

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use(cors());

app.get('/ping', function (req, res) {
    return res.status(200).json({'ping': 'pong'});
});

app.post('/api/login', function (req, res) {
    const userId = login(req.body.userName, req.body.password)
    console.log(`@@@@ userId = ${userId}`);
    if (userId !== 0) {
        return res.status(200).json({userId: userId});
    } else {
        return res.status(401).json({});
    }
});

app.get('/api/deleteDB', function (req, res) {
    DB.deleteDB()
    return res.json({'success': true});
});

app.get('/api/createDB', function (req, res) {
    DB.createDB()
    return res.json({'success': true});
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
