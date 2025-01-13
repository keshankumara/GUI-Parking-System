const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());

app.use(
   express.urlencoded({ 
       extended: true,
   })
);   

app.use(express.json());



app.get('/parking', (req, res) => {
    controller.parking(req, res, next => {
        res.send();
    });
});

app.post('/booking', (req, res) => {
    controller.bookParking (req.body, (callback) => {
        res.send();
    });
});

app.post('/booking_update', (req, res) => {
    controller.updateParking(req.body, (callback) => {
        res.send(callback);
    });
});

app.post('/deleteParking', (req, res) => {
    controller.deleteUser(req.body, (callback) => {
        res.send(callback);
    });
});

module.exports = app;