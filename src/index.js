require ('dotenv').config()
const express = require('express')
const app = express();
const { PORT } = process.env;

app.get('/', (req, res) => {
    res.send("HELLO WORLD!");
})

app.listen(PORT, () => {

	console.info(`Dis _ooSPOOKYoo_ app is listening on ${PORT}`)
})
