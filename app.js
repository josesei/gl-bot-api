//IMPORTS
const config = require('./config.json');

const express = require('express');
const bodyParser = require("body-parser");

const app = express();

//MIDDLEWARE
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//CONFIG
const port = config.PORT;
const isProduction = config.IS_PRODUCTION;
const devUrl = config.DEV_URL;
const prodUrl = config.PROD_URL;
let apiUrl = "";


//ROUTES
app.use(require("./routes/minecraft"));



//INIT
  
app.listen(port, () => {
if(isProduction){
    apiUrl = prodUrl;
}
else{
    apiUrl = devUrl;
}
console.log(`API listening at ${apiUrl}:${port}`)
})