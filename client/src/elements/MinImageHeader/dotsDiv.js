import styled from 'styled-components';

const dotsDiv = styled.div`
    contain: strict !important;
    content: "" !important;
    display: inline-block !important;
    vertical-align: middle;
    /* -webkit-backface-visibility: hidden !important; */
    border: none !important;
    width: ${({ width }) => width}px;
    opacity: ${({ opacity }) => opacity};
    height: ${({ height }) => height}px;
    z-index: 3;
    transform: scale(${({ scale }) => scale});

    &::after {
      contain: strict !important;
      content: "" !important;
      width: ${({ size }) => size}px !important;
      height: ${({ size }) => size}px !important;
      display: inline-block !important;
      background-color: rgba(255, 255, 255, 0.8) !important;
      border-radius: ${({ size }) => String(Number(size) / 2)}px !important;
    };

`;

export default dotsDiv;
