import React, { useState } from 'react';
import Grid from '../elements/grid';
import Row from '../elements/row';
import BigImage from '../elements/bigImage';
import BigImageDiv from '../elements/bigImageDiv';
import SmallImage from '../elements/smallImage';
import SmallImageDiv from '../elements/smallImageDiv';
import ContainerDiv from '../elements/ImageHeader/containerDiv';
import SaveButtonContainerDiv from '../elements/ImageHeader/saveButtonContainerDiv';
import ShareButtonContainerDiv from '../elements/ImageHeader/shareButtonContainerDiv';
import Button from '../elements/ImageHeader/button';
import FontDiv from '../elements/fontDiv';
import SvgImage from '../elements/ImageHeader/svgImage';

const ImageHeader = ({ listingObj, dimensions }) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const bigImgUrl = `${listingObj.listing_images[0].url.split('?')[0]}?aki_policy=xx_large`;
  const smallImgUrl1 = `https://s3.us-west-1.amazonaws.com/draftbnb.gallery/album1/${listingObj.listing_images[1].id}.jpg`;
  const smallImgUrl2 = `https://s3.us-west-1.amazonaws.com/draftbnb.gallery/album1/${listingObj.listing_images[2].id}.jpg`;
  const smallImgUrl3 = `https://s3.us-west-1.amazonaws.com/draftbnb.gallery/album1/${listingObj.listing_images[3].id}.jpg`;
  const smallImgUrl4 = `https://s3.us-west-1.amazonaws.com/draftbnb.gallery/album1/${listingObj.listing_images[4].id}.jpg`;

  const mouseEnterHandler = (e) => {
    setHoveredImage(e.target.name);
  };

  const mouseExitHandler = () => {
    setHoveredImage(null);
  };

  const content = (
    <>
      <ContainerDiv position="relative" width={dimensions.width} box="border-box" height={screen.width * 0.22942187500000003}>
        <Grid width={screen.width}>
          <BigImageDiv size={50}>
            <BigImage
              name="1"
              src={bigImgUrl}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseExitHandler}
              hoveredImage={hoveredImage}
            />
          </BigImageDiv>
          <SmallImageDiv collapse="middle" size={25}>
            <Row>
              <SmallImage
                name="2"
                src={smallImgUrl1}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseExitHandler}
                hoveredImage={hoveredImage}
              />
            </Row>
            <Row>
              <SmallImage
                name="3"
                src={smallImgUrl2}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseExitHandler}
                hoveredImage={hoveredImage}
              />
            </Row>
          </SmallImageDiv>
          <SmallImageDiv collapse="right" size={25}>
            <Row>
              <SmallImage
                name="4"
                src={smallImgUrl3}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseExitHandler}
                hoveredImage={hoveredImage}
              />
            </Row>
            <Row>
              <SmallImage
                name="5"
                src={smallImgUrl4}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseExitHandler}
                hoveredImage={hoveredImage}
              />
            </Row>
          </SmallImageDiv>
        </Grid>
        <ContainerDiv position="absolute" height="36" width="204.234" top="24" right="24">
          <SaveButtonContainerDiv>
            <Button width="90.016">
              <ContainerDiv display="flex" justify_content="center" height="22" width="58.016">
                <ContainerDiv display="inline-flex" align_self="center" height="15" width="27">
                  <SvgImage left="-67" alt="heart" src="https://s3-us-west-1.amazonaws.com/draftbnb.gallery/album1/heart.svg" />
                </ContainerDiv>
                <ContainerDiv display="inline-flex" align_items="center" height="22" width="31.016">
                  <FontDiv>Save</FontDiv>
                </ContainerDiv>
              </ContainerDiv>
            </Button>
          </SaveButtonContainerDiv>
          <ShareButtonContainerDiv>
            <Button width="96.219">
              <ContainerDiv display="flex" justify_content="center" height="22" width="64.219">
                <ContainerDiv display="inline-flex" align_self="center" height="15" width="27">
                  <SvgImage left="-67" alt="heart" src="https://s3-us-west-1.amazonaws.com/draftbnb.gallery/album1/share.svg" />
                </ContainerDiv>
                <ContainerDiv display="inline-flex" align_items="center" height="22" width="31.016">
                  <FontDiv>Share</FontDiv>
                </ContainerDiv>
              </ContainerDiv>
            </Button>
          </ShareButtonContainerDiv>
        </ContainerDiv>
        <ContainerDiv position="absolute" height="36" width="113.781" bottom="24" right="24">
          <SaveButtonContainerDiv>
            <Button width="113.781">
              <FontDiv>View Photos</FontDiv>
            </Button>
          </SaveButtonContainerDiv>
        </ContainerDiv>
      </ContainerDiv>
    </>
  );

  return content;
};

export default ImageHeader;
