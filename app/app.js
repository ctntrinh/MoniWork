let express = require('express');
let app = express();
const bodyParser = require('body-parser');

app.get("/test",(req, res) => res.send("Hello test"));

module.exports = app;