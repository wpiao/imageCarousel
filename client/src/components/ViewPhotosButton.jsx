import React from 'react';
import SaveButtonContainerDiv from '../elements/ImageHeader/saveButtonContainerDiv';
import Button from '../elements/ImageHeader/button';
import FontDiv from '../elements/fontDiv';

const ViewPhotosButton = (props) => (
  <SaveButtonContainerDiv>
    <Button
      width="113.781"
      onClick={() => props.viewSelectHandler(true)}
    >
      <FontDiv>View Photos</FontDiv>
    </Button>
  </SaveButtonContainerDiv>
);

export default ViewPhotosButton;
