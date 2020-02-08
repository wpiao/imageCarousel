const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const controllers = require('./controllers');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/gallery/:id', cors(), controllers.gallery.getOne);

app.get('/gallery', controllers.gallery.getAll);

app.listen(port, () => console.log(`Gallery server listening on port ${port}!`));
