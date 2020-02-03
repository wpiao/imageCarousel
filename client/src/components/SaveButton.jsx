import React from 'react';
import SaveButtonContainerDiv from '../elements/ImageHeader/saveButtonContainerDiv';
import Button from '../elements/ImageHeader/button';
import ContainerDiv from '../elements/containerDiv';
import FontDiv from '../elements/fontDiv';

const SaveButton = ({ saveButtonHandler }) => (
  <SaveButtonContainerDiv>
    <Button onClick={() => saveButtonHandler(true)} width="90.016">
      <ContainerDiv display="flex" justify_content="center" height="22" width="58.016">
        <ContainerDiv display="inline-flex" align_self="center" height="15" width="27">
          <svg
            stroke="#484848"
            strokeWidth="2.25"
            viewBox="0 0 24 24"
            focusable="false"
            fill="currentColor"
            fillOpacity="0"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              height: '15px', width: '15px', display: 'block', overflow: 'visible',
            }}
          >
            <path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" />
          </svg>
        </ContainerDiv>
        <ContainerDiv display="inline-flex" align_items="center" height="22" width="31.016">
          <FontDiv>Save</FontDiv>
        </ContainerDiv>
      </ContainerDiv>
    </Button>
  </SaveButtonContainerDiv>
);

export default SaveButton;
