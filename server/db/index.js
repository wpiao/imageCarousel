const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:37017/gallery', { useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to MongoDb');
  })
  .catch((error) => console.log(error));


const GallerySchema = mongoose.Schema({
  listing_id: { type: Number, required: true, unique: true },
  listing_title: { type: String },
  listing_images: [{ id: Number, url: String, caption: String }],
});

module.exports = mongoose.model('Gallery', GallerySchema);
