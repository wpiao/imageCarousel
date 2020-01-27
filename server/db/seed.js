const jsonData = require('./dummydata.js');
const GalleryModel = require('./index.js');


GalleryModel.deleteMany({})
  .then((result) => console.log(`deleted count: ${result.deletedCount}`));

let count = 1;

const dataExtract = jsonData.map((obj) => {
  const extract = {
    listing_id: count,
    listing_title: obj.pdp_listing_detail.name,
    listing_images: obj.pdp_listing_detail.photos.map((photoObj) => ({
      id: photoObj.id,
      url: photoObj.picture,
      caption: photoObj.caption,
    })),
  };
  count += 1;

  return extract;
});

GalleryModel.insertMany(dataExtract)
  .then((docs) => console.log(`Successfully inserted ${docs.length} documents`))
  .catch((err) => console.log(err));
