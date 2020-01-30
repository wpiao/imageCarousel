import React from 'react';
import ContainerDiv from '../elements/containerDiv';
import SaveButton from './SaveButton.jsx';
import ShareButton from './ShareButton.jsx';
import ViewPhotosButton from './ViewPhotosButton.jsx';
import FiveImages from './FiveImages.jsx';

const ImageHeader = ({ listingObj, dimensions }) => {
  return (
    <>
      <ContainerDiv position="relative" width={dimensions.width} box="border-box" height={screen.width * 0.22942187500000003}>
        <FiveImages listingObj={listingObj} />
        <ContainerDiv position="absolute" height="36" width="204.234" top="24" right="24">
          <SaveButton />
          <ShareButton />
        </ContainerDiv>
        <ContainerDiv position="absolute" height="36" width="113.781" bottom="24" right="24">
          <ViewPhotosButton />
        </ContainerDiv>
      </ContainerDiv>
    </>
  );
};

export default ImageHeader;
