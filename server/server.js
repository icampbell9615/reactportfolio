const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use(express.static('../client/build'));

app.listen(PORT, ()=> console.log("Listening on :%s", PORT))