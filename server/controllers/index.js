const models = require('../models');

module.exports = {
  gallery: {
    insertAll: (req, res) => {
      models.gallery.insertAll(data, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.sendStatus(200);
        }
      });
    },

    getOne: (req, res) => {
      const id = req.params.id;
      models.gallery.getOne(id, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },

    getAll: (req, res) => {
      models.gallery.getAll((err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },

    deleteAll: (req, res) => {
      models.gallery.insertAll((err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.sendStatus(200);
        }
      });
    },
  },
};
