import React, { useState } from 'react';
import Grid from '../elements/grid';
import Row from '../elements/row';
import BigImage from '../elements/bigImage';
import BigImageDiv from '../elements/bigImageDiv';
import SmallImage from '../elements/smallImage';
import SmallImageDiv from '../elements/smallImageDiv';

const ImageHeader = ({ listingObj, viewSelectHandler }) => {
  const [isHovered, setIsHovered] = useState(false);

  const bigImgUrl = `${listingObj.listing_images[0].url.split('?')[0]}?aki_policy=xx_large`;
  const smallImgUrl1 = `https://s3.us-west-1.amazonaws.com/draftbnb.gallery/album1/${listingObj.listing_images[1].id}.jpg`;
  const smallImgUrl2 = `https://s3.us-west-1.amazonaws.com/draftbnb.gallery/album1/${listingObj.listing_images[2].id}.jpg`;
  const smallImgUrl3 = `https://s3.us-west-1.amazonaws.com/draftbnb.gallery/album1/${listingObj.listing_images[3].id}.jpg`;
  const smallImgUrl4 = `https://s3.us-west-1.amazonaws.com/draftbnb.gallery/album1/${listingObj.listing_images[4].id}.jpg`;
  const { innerWidth } = window;
  const bigW = Math.round(innerWidth / 2 - 2);
  const bigH = Math.round(innerWidth / 2 - 2) * 2 / 3;
  const smallW = Math.round(innerWidth / 4 - 2);
  const smallH = Math.round(innerWidth / 4 - 2) * 2 / 3;

  useState(() => {

  }, [])

  const content = (
    <>
      <Grid>
        <BigImageDiv size={50}>
          <BigImage
            height={bigH}
            width={bigW}
            src={bigImgUrl}
          />
        </BigImageDiv>
        <SmallImageDiv collapse="middle" size={25}>
          <Row>
            <SmallImage
              width={smallW}
              height={smallH}
              src={smallImgUrl1}
            />
          </Row>
          <Row>
            <SmallImage
              width={smallW}
              height={smallH}
              src={smallImgUrl2}
            />
          </Row>
        </SmallImageDiv>
        <SmallImageDiv collapse="right" size={25}>
          <Row>
            <SmallImage
              width={smallW}
              height={smallH}
              src={smallImgUrl3}
            />
          </Row>
          <Row>
            <SmallImage
              width={smallW}
              height={smallH}
              src={smallImgUrl4}
            />
          </Row>
        </SmallImageDiv>
      </Grid>
    </>
  );

  return content;
};

export default ImageHeader;
