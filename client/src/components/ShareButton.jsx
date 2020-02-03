import React from 'react';
import ShareButtonContainerDiv from '../elements/ImageHeader/shareButtonContainerDiv';
import Button from '../elements/ImageHeader/button';
import ContainerDiv from '../elements/containerDiv';
import FontDiv from '../elements/fontDiv';

const ShareButton = ({ shareButtonHandler }) => (
  <ShareButtonContainerDiv>
    <Button onClick={() => shareButtonHandler(true)} width="96.219">
      <ContainerDiv display="flex" justify_content="center" height="22" width="64.219">
        <ContainerDiv display="inline-flex" align_self="center" height="15" width="27">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            fillOpacity="0"
            stroke="currentColor"
            strokeWidth="2.25"
            focusable="false"
            aria-hidden="true"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              height: '15px', width: '15px', display: 'block', overflow: 'visible',
            }}
          >
            <g fillRule="evenodd">
              <path d="m11.5 16v-15" />
              <path d="m7.5 4 4-3 4 3" />
              <path d="m5.4 9.5h-3.9v14h20v-14h-3.1" />
            </g>
          </svg>
        </ContainerDiv>
        <ContainerDiv display="inline-flex" align_items="center" height="22" width="31.016">
          <FontDiv>Share</FontDiv>
        </ContainerDiv>
      </ContainerDiv>
    </Button>
  </ShareButtonContainerDiv>
);

export default ShareButton;
