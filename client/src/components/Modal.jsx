import React, { useState, useEffect } from 'react';
import ContainerDiv from '../elements/containerDiv';
import ModalCarousel from './ModalCarousel.jsx';
import ModalImage from './ModalImage.jsx';

const Modal = (props) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [imageList, setImageList] = useState(null);

  const xxLImageUrl = (url) => `${url.split('?')[0]}?aki_policy=xx_large`;

  const leftClickHandler = () => {
    if (currentIndex === 0) {
      setCurrentIndex(imageList.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const rightClickHandler = () => {
    const nextIndex = (currentIndex + 1) % imageList.length;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    setCurrentIndex(Number(props.clickedImage));

    setImageList(props.listingObj.listing_images.map((imageObj) => {
      const result = imageObj;
      imageObj.url = xxLImageUrl(imageObj.url);
      return result;
    }));
  }, []);

  console.log(currentIndex)

  let content = <p>Loading...</p>;
  if (currentIndex !== null) {
    content = (
      <>
        <ContainerDiv>
          <ModalImage
            imageList={imageList}
            currentIndex={currentIndex}
            rightClickHandler={rightClickHandler}
            leftClickHandler={leftClickHandler}
          />
          <ModalCarousel />
        </ContainerDiv>
      </>
    );
  }
  return content;
};


export default Modal;
