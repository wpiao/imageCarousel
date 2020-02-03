import React from 'react';
import ContainerDiv from '../elements/containerDiv';
import FontDiv from '../elements/Modal/fontDiv';
import ShareEntryBtn from '../elements/ImageHeader/shareEntryBtn';

const ShareButtonPortalEntry = ({ path }) => {
  return (
    <ContainerDiv
      border_top2="1px solid rgb(235, 235, 235) !important"
      border_bottom2="1px solid rgb(235, 235, 235) !important"
      padding_top="24"
      padding_bottom="24"
    >
      <ContainerDiv display="flex" name="button">
        <ShareEntryBtn>
          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            focusable="false"
            style={{
              height: '18px', width: '18px', display: 'block', fill: 'rgb(72, 72, 72)',
            }}
          >
            <path d={Object.values(path)[0]} />
          </svg>
        </ShareEntryBtn>
        <FontDiv hover="underline" font_size="16" font_family="Montserrat" font_weight="500" line_heightem="1.375" color="#008489 !important">{Object.keys(path)}</FontDiv>
      </ContainerDiv>
    </ContainerDiv>

  );
}
export default ShareButtonPortalEntry;
