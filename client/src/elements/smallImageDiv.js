import styled from 'styled-components';

const media = {
  right: (styles) => `
  @media only screen and (max-width: 1128px) {
    ${styles}
  }
  `,
  middle: (styles) => `
  @media only screen and (max-width: 744px) {
    ${styles}
  }
  `,
};

const smallImageDiv = styled.div`
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  ${(props) => props.collapse && media[props.collapse]('display: none;')};
  height: ${window.innerHeight * 0.529}px;
  width: ${(props) => props.size}%;
`;

export default smallImageDiv;
