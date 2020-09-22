
////////////////////////////////////////////////////////////////////////////////////
//////////////// SET UP ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
require ('dotenv').config();
const sequelize = require('./db')
const express = require('express');
const path = require('path'); 
const { Sequelize } = require('sequelize');
const app = express();
const { PORT } = process.env;
const DIR = path.join(__dirname, '../build');
const HTML_FILE = path.join(DIR, 'index.html');
app.use(express.static(DIR));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// -------- TEST --------- //
const mockResponse = {
    'name': 'Spooky Boys', 
    'specialty':'Poltergeists'
};

const Query = sequelize.define('Query', {
    id: { 
        type: Sequelize.NUMBER, 
        auto_increment: true,
        primaryKey: true
    },
    value: Sequelize.STRING,
}, { timestamps: false })
////////////////////////////////////////////////////////////////////////////////////
//////////////// CRUD //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
app.get('/', (req, res) => {
    res.sendFile(HTML_FILE);
})

app.get('/query', (req, res) => {
    Query.findAll()
        .then( (query) => {
            res.status(200).send(query)
        })
        .catch( err => {
            res.status(500).send(err);
        })
})

app.post('/query', (req, res) => {
    Query.create({ value : 'Hello hello hello'})
    .then( (query) => {
        res.status(200).send(JSON.stringify(query.value))
    })
    .catch( err => {
        res.status(500).send(err);
    })
})

app.post('/', (req, res) => {
    res.status(201).send({"name": "Ghost Bros", "specialty": "Daemons"});
})


////////////////////////////////////////////////////////////////////////////////////
//////////////// PORT //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
	console.info(`Dis _ooSPOOKYoo_ app is listening on ${PORT}`)
})



