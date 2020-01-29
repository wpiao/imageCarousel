import React, { useState } from 'react';
import BlurryDiv from '../elements/MinImageHeader/blurryDiv.js';
import BlurryImageDiv from '../elements/MinImageHeader/blurryImageDiv.js';
import ImageContainerDiv from '../elements/MinImageHeader/imageContainerDiv.js';
import DotsContainerDiv from '../elements/MinImageHeader/dotsContainerDiv.js';
import DotsDiv from '../elements/MinImageHeader/dotsDiv.js';
import DotsInnerContainerDiv from '../elements/MinImageHeader/dotsInnerContainerDiv.js';

const MinImageHeader = ({ listingObj }) => {

  const content = (
    <>
      <BlurryDiv>
        <ImageContainerDiv>
          <BlurryImageDiv id={listingObj.listing_images[0].id} />
        </ImageContainerDiv>
        <DotsContainerDiv>
          <DotsInnerContainerDiv>
            <DotsDiv width="18" height="8" opacity="1" scale="1" size="8" />
            <DotsDiv width="16" height="6" opacity="1" scale="1" size="6" />
            <DotsDiv width="16" height="6" opacity="1" scale="1" size="6" />
            <DotsDiv width="16" height="6" opacity="1" scale="1" size="6" />
            <DotsDiv width="16" height="6" opacity="1" scale="1" size="6" />
            <DotsDiv width="10.6667" height="6" opacity=".875" scale="0.666667" size="6" />
          </DotsInnerContainerDiv>
        </DotsContainerDiv>
      </BlurryDiv>
    </>
  );

  return content;
};

export default MinImageHeader;
