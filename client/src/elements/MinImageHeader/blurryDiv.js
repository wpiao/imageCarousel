import styled from 'styled-components';

const blurryDiv = styled.div`
  background-size: 100% 100%;
  background-image: url('https://s3-us-west-1.amazonaws.com/draftbnb.gallery/album1/cbimage.jpg');
  padding-top: 66.6667%;
  contain: strict !important;
  position: relative !important;
  height: 100%;
  width: 100% !important;
  z-index: 0 !important;
`;

export default blurryDiv;
