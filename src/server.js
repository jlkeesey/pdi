/**
 * The base server application implemented in Express.
 */

import express from 'express';
import cors from 'cors';
import path from 'path';
import Database from './db/database.js';
import login from './api/login.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Dao from "./db/dao/Dao.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use(cors());

const DB = new Database();
Dao.setDb(DB);

app.get('/ping', function (req, res) {
    return res.status(200).json({'ping': 'pong'});
});

app.post('/api/login', function (req, res) {
    const user = login(req.body.userName, req.body.password)
    if (user) {
        return res.status(200).json({userId: user.userId});
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

app.get('/api/recreateDB', function (req, res) {
    DB.deleteDB()
    DB.createDB()
    return res.json({'success': true});
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
