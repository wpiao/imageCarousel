import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageHeader from './ImageHeader.jsx';

const App = (props) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [loadedGallery, setLoadedGallery] = useState({});
  const [currentWidth, setCurrentWidth] = useState(0);

  const fetchData = (id) => {
    const url = `http://localhost:3000/gallery/${id}`;

    axios.get(url)
      .then(({ data }) => {
        setLoadedGallery(data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const viewSelectHandler = (bool) => {
    setIsShowModal(bool);
  };

  const windowChangeHandler = (width) => {

  };


  useEffect(() => {
    fetchData(32);
  }, []);

  console.log(loadedGallery)

  let content = <p>Loading...</p>;
  if (!isShowModal && loadedGallery && Object.keys(loadedGallery).length > 0) {
    content = (
      <>
        <ImageHeader
          viewSelectHandler={viewSelectHandler}
          listingObj={loadedGallery}
        />
      </>
    );
  }
  return content;

};


export default App;
