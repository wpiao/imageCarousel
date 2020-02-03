import styled from 'styled-components';

const mainImage = styled.img`
    max-height: 55vh;
    object-fit: cover;
    cursor: pointer;
    z-index: 2;
    border-radius: 16px;
    position: absolute;
    max-width: 85%;
    margin: 0px auto;
    top: 50%;
    transform: translateY(-50%);
    left: 0px;
    right: 0px;
    bottom: 0px;

    @media (min-width: 1128px) {
    max-height: 75vh !important;
  }
`;

export default mainImage;
