import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  vertical-align: middle;
  background-color: rgb(0,0,0);
  position: relative;
  height: 50%;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  overflow: hidden;
  ${(props) => (props.bottom ? `border-bottom-style:none` : null)};
`;

export default Row;
