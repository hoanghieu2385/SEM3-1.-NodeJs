const app = require('./app.js')
const mongoose = require('mongoose');
const express = require('express')
    // const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/')
    .then(() => {
        console.log("Connection successfully")
    }
    )
    .catch(() => {
        console.log("Connection fail")
    })

{
    app.listen(9000, () => {
        console.log(`Server listening on ${9000}`)
        console.log("\nhttp://localhost:9000/")
    })

};