import styled from 'styled-components';

const dotsDiv = styled.div`
    contain: strict !important;
    content: "" !important;
    display: inline-block !important;
    /* -webkit-backface-visibility: hidden !important; */
    /* border: none !important; */
    width: ${({ width }) => width}px;
    opacity: ${({ opacity }) => opacity};
    height: 8px!important;
    z-index: 3;

    &::after {
      contain: strict !important;
      content: "" !important;
      width: 6px !important;
      height: 6px !important;
      display: inline-block !important;
      background-color: rgba(255, 255, 255, 0.8) !important;
      border-radius: 3px !important;
    };

`;

export default dotsDiv;
