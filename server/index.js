
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
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());


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
app.get('/query', (req, res) => {
    Query.create({ value: 'CHROMATICA'})
        .then( (query) => {
            res.send(JSON.stringify(query.value))
        })
})

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE);
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



