import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ContainerDiv from '../elements/containerDiv';
import FontDiv from '../elements/Modal/fontDiv';
import ShareCloseBtn from '../elements/ImageHeader/shareCloseBtn';

const SaveButtonPortal = ({ saveButtonHandler }) => {
  const modalRoot = document.getElementById('modal-root');
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => modalRoot.removeChild(el);
  });

  return (
    createPortal(
      <>
        <ContainerDiv box_sizing="border-box" background="rgba(0, 0, 0, 0.75) !important;" z_index="2000" position="fixed" top="0" right="0" left="0" bottom="0">
          <ContainerDiv display="flex" align-items="center" min_heightvh="100">
            <ContainerDiv name="3" position="relative" margin_leftauto="true" margin_rightauto="true">
              <ContainerDiv name="4" background_color="rgb(255, 255, 255)" position="relative" widthvw="90" max_width="376" overflow="visible" top_margin="64" bottom_margin="64">
                <ContainerDiv padding="32">
                  <ContainerDiv name="Xclose" bottom_margin="24">
                    <ShareCloseBtn onClick={() => saveButtonHandler(false)}>
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                        style={{
                          height: '16px', width: '16px', fill: 'rgb(118, 118, 118)',
                        }}
                      >
                        <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"></path>
                      </svg>
                    </ShareCloseBtn>
                  </ContainerDiv>
                  <ContainerDiv name="header" padding_bottom="24">
                    <h1>
                      <FontDiv margin="0" font_size="24" font_weight="600" font_family="Montserrat">Share</FontDiv>
                    </h1>
                  </ContainerDiv>
                  <div name="svgs">
                  </div>
                </ContainerDiv>
              </ContainerDiv>
            </ContainerDiv>
          </ContainerDiv>
        </ContainerDiv>
      </>,
      el)
  );
};

export default SaveButtonPortal;
