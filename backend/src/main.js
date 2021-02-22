const express = require('express');
const  router = require('./routes/routes');
const mongoose = require("mongoose");
const db = require("./config/config");


const port = 3000;

class main {
    constructor(){
        this.express = express();

        this.database();
        this.middlewares();
        this.routes();

        this.express.listen(port, () => { console.log(`Running at port: ${port}`) })

    }
        
    database() {
        mongoose.connect(db.url, { useNewUrlParser: true });
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(require("./routes/routes"));
    }
}

module.exports = new main().express;
