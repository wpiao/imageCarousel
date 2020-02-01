import React, { useState, useEffect } from 'react';
import ContainerDiv from '../elements/containerDiv';
import FontDiv from '../elements/Modal/fontDiv';

const ModalCarousel = (props) => {
  // props.setCurrentIndex is the current image to display
  // should set first image as imageList[props.currentIndex]
  const [smallImageList, setSmallImageList] = useState(null);
  const smallImageUrl = (url) => `${url.split('?')[0]}?aki_policy=small`;

  useEffect(() => {
    setSmallImageList(props.listingObj.listing_images.map((imageObj, index) => ({
      index,
      url: smallImageUrl(imageObj.url),
    })));
  }, []);

  const content = (
    <>
      <ContainerDiv width={264} min_width={264} display="table-cell" padding_top={104} vertical_align="top">
        <ContainerDiv name="1" widthpercent={100} margin={0} padding_right={52}>

        </ContainerDiv>
        <ContainerDiv name="2" max_widthpercent={100} padding_right={40} margin={0}>
          <ContainerDiv name="3" bottom_margin={16}>
            <FontDiv font_family="Nunito Sans" font_size={15} font_weight={600} line_heightem={1.5}>
              {props.currentIndex + 1}
              {' '}
              /
              {' '}
              {props.listingObj.listing_images.length}
            </FontDiv>
          </ContainerDiv>
          <ContainerDiv name="4" word_break="break-word">
            <FontDiv font_size={15} font_family="Montserrat" font_weight={400} line_heightem={1.5}>
              {props.listingObj.listing_images[props.currentIndex].caption}
            </FontDiv>
          </ContainerDiv>
        </ContainerDiv>
      </ContainerDiv>
    </>
  );
  return content;
};


export default ModalCarousel;
