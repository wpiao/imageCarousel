import styled from 'styled-components';

const bigImageDiv = styled.div`
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  /* overflow:hidden; */
  width: ${(props) => props.size}%;
  height: ${window.innerHeight * 0.529}px;
  color: #484848;
  border-width: 1px;
  border-style: solid;
`;

export default bigImageDiv;
