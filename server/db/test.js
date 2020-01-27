const models = require('../models');


models.gallery.getOne(2, (err, data) => {
  if (err) {
    console.log(err);
  }
  debugger;
});