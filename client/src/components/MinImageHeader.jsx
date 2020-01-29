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
            <DotsDiv width="18" opacity="1" />
            <DotsDiv width="16" opacity="1" />
            <DotsDiv width="16" opacity="1" />
            <DotsDiv width="16" opacity="1" />
            <DotsDiv width="16" opacity="1" />
            <DotsDiv width="10.6667" opacity=".875" />
          </DotsInnerContainerDiv>
        </DotsContainerDiv>
      </BlurryDiv>
    </>
  );

  return content;
};

export default MinImageHeader;
