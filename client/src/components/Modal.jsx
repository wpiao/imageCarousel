import React, { useState, useEffect } from 'react';


// Left Side
// Right Side

const Modal = (props) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [imageList, setImageList] = useState(null);

  const xxLImageUrl = (url) => `${url.split('?')[0]}?aki_policy=xx_large`;

  useEffect(() => {
    setCurrentIndex(Number(props.clickedImage));

    setImageList(props.listingObj.listing_images.map((imageObj) => {
      const result = imageObj;
      imageObj.url = xxLImageUrl(imageObj.url);
      return result;
    }));
  }, []);

  console.log(imageList);
  console.log(currentIndex);
  let content = <p>Loading...</p>;
  if (currentIndex) {
    content = (
      <>
        <img alt={imageList[currentIndex].caption} src={imageList[currentIndex].url} />
      </>
    );
  }
  return content;
};


export default Modal;
