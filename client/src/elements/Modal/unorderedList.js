import styled from 'styled-components';

const ul = styled.ul`
  position: absolute !important;
  list-style-type: none !important;
  left: 0px !important;
  margin: 0px !important;
  padding: 0px 0px 0px 8px !important;
  ${(props) => (props.transform ? `transform: translateX(${props.transform}px);` : null)}
  transition: -ms-transform 0.3s ease-out 0s, -webkit-transform 0.3s ease-out 0s, transform 0.3s ease-out 0s !important;
`;

export default ul;
