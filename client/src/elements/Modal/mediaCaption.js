import styled from 'styled-components';

const mediaCaption = styled.div`
  @media (min-width: 744px) {
    max-width: 80% !important;
    margin: auto !important;
  }

  @media (min-width: 1128px) {
    max-width: 100% !important;
    padding-right: 40px !important;
    margin: 0px !important;
  }
`;

export default mediaCaption;
