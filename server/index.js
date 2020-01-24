const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, "../client/dist")));

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Gallery server listening on port ${port}!`));
