import React, { useState, useEffect } from 'react';
import ContainerDiv from '../elements/containerDiv';
import LeftButton from '../elements/Modal/leftButton';
import RightButton from '../elements/Modal/rightButton';
import MainImage from '../elements/Modal/mainImage';

const ModalImage = ({ leftClickHandler, rightClickHandler, imageList, currentIndex }) => (
  <>
    <ContainerDiv box_sizing="border-box" widthpercent={100} heightvh={100} padding={40} display="table-cell" vertical_align="middle">
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
    </ContainerDiv>
  </>
);

export default ModalImage;
