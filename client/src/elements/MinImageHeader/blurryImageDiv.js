import styled from 'styled-components';

const idUrlConvert = (id) => `url(https://s3-us-west-1.amazonaws.com/draftbnb.gallery/album1/${id}.jpg)`;

const blurryImageDiv = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ id }) => idUrlConvert(id)};
  background-size: contain !important;
  background-position: 50% 50% !important;
  background-repeat: no-repeat !important;
  z-index: 1 !important;
  position: absolute !important;
  overflow: hidden;
`;

export default blurryImageDiv;