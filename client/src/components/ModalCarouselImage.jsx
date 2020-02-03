import React from 'react';
import LI from '../elements/Modal/listItem';
import ImageButton from '../elements/Modal/imageButton';
import SmallImage from '../elements/Modal/smallImage';
// imageObj: has index, url, caption

const ModalCarouselImage = ({ setCurrentIndex, index, currentIndex, imageObj }) => {
  const content = (
    <>
      <LI index={index}>
        <ImageButton currentIndex={currentIndex} name={imageObj.index}>
          <SmallImage
            alt={imageObj.caption}
            src={imageObj.url}
            onClick={() => setCurrentIndex(index)}
          />
        </ImageButton>
      </LI>
    </>
  );
  return content;
};


export default ModalCarouselImage;
