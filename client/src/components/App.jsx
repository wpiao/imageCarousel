import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageHeader from './ImageHeader.jsx';

const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [loadedGallery, setLoadedGallery] = useState({});
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const resizeHandler = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  const viewSelectHandler = (bool) => {
    setIsShowModal(bool);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  });


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


  useEffect(() => {
    fetchData(32);
  }, []);

  console.log(loadedGallery);
  console.log(dimensions);

  let content = <p>Loading...</p>;
  if (!isShowModal && loadedGallery && Object.keys(loadedGallery).length > 0) {
    content = (
      <>
        <ImageHeader
          dimensions={dimensions}
          listingObj={loadedGallery}
        />
      </>
    );
  }
  return content;
};


export default App;
