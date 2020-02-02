import styled from 'styled-components';

const mediaA = styled.div`
  box-sizing: border-box;
  vertical-align:middle;
  @media (min-width: 744px) {
    width: 100vw;
    height: 65vh;
    padding: 40px;
    display: table-cell;
  }

  @media (min-width: 1128px) {
    width: 100% !important;
    height: 100vh !important;
  }
`;

export default mediaA;
