import React, { useState, useEffect } from 'react';
import ContainerDiv from '../elements/containerDiv';
import ModalCarousel from './ModalCarousel.jsx';
import ModalImage from './ModalImage.jsx';
import CloseButton from '../elements/Modal/closeButton';

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

  let content = <p>Loading...</p>;
  if (currentIndex !== null) {
    content = (
      <>
        <ContainerDiv position="relative">
          <ModalImage
            imageList={imageList}
            currentIndex={currentIndex}
            rightClickHandler={rightClickHandler}
            leftClickHandler={leftClickHandler}
          />
          <ModalCarousel />
          <ContainerDiv z_index="4" position="absolute" top="0" right="0" top_margin="40" right_margin="40">
            <CloseButton data-testid="closeBtn" onClick={() => props.viewSelectHandler(false)}>
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                style={{
                  height: '24px', width: '24px', display: 'block', fill: 'rgb(72, 72, 72)',
                }}
              >
                <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" />
              </svg>
            </CloseButton>
          </ContainerDiv>
        </ContainerDiv>
      </>
    );
  }
  return content;
};


export default Modal;
