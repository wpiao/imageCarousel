import styled from 'styled-components';

const matchingScale = (num) => {
  return `&:hover {
    transform: scale(${num});
  }`;
};

const smallImage = styled.img`
  top: 0px;
  left: 0px;
  cursor: pointer;
  position: absolute;
  transform: scale(1);
  transition: -ms-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s !important;
  max-width: 100%;

  ${({ name, hoveredImage }) => name === hoveredImage ? matchingScale(1.05) : matchingScale(1)};
  ${({ name, hoveredImage }) => hoveredImage !== null && name !== hoveredImage ? 'opacity: 0.7' : 'opacity:1'};
`;

export default smallImage;


/*
opacity: 0.7 !important;
    transition: all 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s !important;
*/
