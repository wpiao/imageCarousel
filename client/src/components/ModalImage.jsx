import React, { useState, useEffect } from 'react';
import ContainerDiv from '../elements/containerDiv';
import LeftButton from '../elements/Modal/leftButton';
import RightButton from '../elements/Modal/rightButton';
import MainImage from '../elements/Modal/mainImage';
import MediaA from '../elements/Modal/mediaA';
import styled from 'styled-components';

const ModalImage = ({ leftClickHandler, rightClickHandler, imageList, currentIndex }) => (
  <>
    <MediaA>
      <ContainerDiv heightpercent={100} display="flex" position="relative" justify_content="center">
        <ContainerDiv>
          <LeftButton onClick={leftClickHandler}>
            <svg
              viewBox="0 0 18 18"
              aria-hidden="true"
              focusable="false"
              style={{
                height: '24px', width: '24px', fill: 'rgb(72, 72, 72)',
              }}
            >
              <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" />
            </svg>
          </LeftButton>
          <RightButton onClick={rightClickHandler}>
            <svg
              viewBox="0 0 18 18"
              aria-hidden="true"
              focusable="false"
              style={{
                height: '24px', width: '24px', fill: 'rgb(72, 72, 72)',
              }}
            >
              <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" />
            </svg>
          </RightButton>
          <MainImage onClick={rightClickHandler} src={imageList[currentIndex].url} />
        </ContainerDiv>
      </ContainerDiv>
    </MediaA>
  </>
);

export default ModalImage;
