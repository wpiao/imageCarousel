import React, { useState } from 'react';
import Grid from '../elements/grid';
import Row from '../elements/row';
import BigImage from '../elements/bigImage';
import BigImageDiv from '../elements/bigImageDiv';
import SmallImage from '../elements/smallImage';
import SmallImageDiv from '../elements/smallImageDiv';

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

  console.log(hoveredImage);

  const content = (
    <>
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
    </>
  );

  return content;
};

export default ImageHeader;
