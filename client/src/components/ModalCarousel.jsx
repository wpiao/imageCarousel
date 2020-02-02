import React, { useState, useEffect } from 'react';
import ContainerDiv from '../elements/containerDiv';
import FontDiv from '../elements/Modal/fontDiv';
import UL from '../elements/Modal/unorderedList';
import ModalCarouselImage from './ModalCarouselImage.jsx';
import MediaB from '../elements/Modal/mediaB';
import MediaCaption from '../elements/Modal/mediaCaption';

const ModalCarousel = (props) => {
  const [translateAmount, setTranslateAmount] = useState([]);
  const [smallImageList, setSmallImageList] = useState([]);
  const smallImageUrl = (url) => `${url.split('?')[0]}?aki_policy=small`;
  const { length } = props.listingObj.listing_images;

  useEffect(() => {
    setSmallImageList(props.listingObj.listing_images.map((imageObj, index) => ({
      index,
      url: smallImageUrl(imageObj.url),
      caption: imageObj.caption,
    })));

    if (length === 5) {
      setTranslateAmount([8, 8, -38, -76, -76]);
    } else {
      const result = [8, 8, -38];
      for (let i = 3; i < length; i += 1) {
        const secondLastIndex = length - 2;
        const thirdLastIndex = length - 3;
        if (i === secondLastIndex) {
          result[i] = result[thirdLastIndex] - 38;
        } else if (i === length - 1) {
          result[i] = result[secondLastIndex];
        } else {
          result[i] = result[i - 1] - 56;
        }
      }
      setTranslateAmount(result);
    }
  }, []);

  const content = (
    <>
      <MediaB>
        <ContainerDiv name="1" widthpercent={100} margin="0" box_sizing="border-box" padding_right={52}>
          <ContainerDiv name="2" widthauto="auto" left_margin="0" right_margin="0" bottom_margin={32}>
            <ContainerDiv name="3" max_widthvh={100} margin_leftauto="auto" margin_rightauto="auto" overflow="hidden">
              <ContainerDiv name="4 blurry relative anchor" margin_leftauto="auto" margin_rightauto="auto" position="relative">
                {
                  props.currentIndex !== 0
                    ? <ContainerDiv name="5 blurry-left" position="absolute" height={64} width={20} blur="left" z_index={1} />
                    : null
                }
                {
                  props.currentIndex !== length - 1
                    ? <ContainerDiv name="6 blurry-right" right="0" position="absolute" height={64} width={20} blur="right" z_index={1} />
                    : null
                }
                <ContainerDiv name="7 image relative anchor" position="relative" box_sizing="border-box" padding_top="8" padding_bottom="8" height="64" overflow="hidden">
                  <ContainerDiv name="8" position="absolute" width="9999">
                    <UL name="unordered list" transform={translateAmount[props.currentIndex]}>
                      {
                        smallImageList.map((obj, index) => (
                          <ModalCarouselImage
                            index={index}
                            currentIndex={props.currentIndex}
                            imageObj={obj}
                            setCurrentIndex={props.setCurrentIndex}
                          />
                        ))
                      }
                    </UL>
                  </ContainerDiv>
                </ContainerDiv>
              </ContainerDiv>
            </ContainerDiv>
          </ContainerDiv>
        </ContainerDiv>
        <MediaCaption max_widthpercent={100} padding_right={40} margin={0}>
          <ContainerDiv bottom_margin={16}>
            <FontDiv font_family="Nunito Sans" font_size={15} font_weight={600} line_heightem={1.5}>
              {props.currentIndex + 1}
              {' '}
              /
              {' '}
              {length}
            </FontDiv>
          </ContainerDiv>
          <ContainerDiv word_break="break-word">
            <FontDiv font_size={15} font_family="Montserrat" font_weight={400} line_heightem={1.5}>
              {props.listingObj.listing_images[props.currentIndex].caption}
            </FontDiv>
          </ContainerDiv>
        </MediaCaption>
      </MediaB>
    </>
  );
  return content;
};


export default ModalCarousel;
