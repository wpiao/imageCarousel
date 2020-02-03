import styled from 'styled-components';

const li = styled.li`
  float: left !important;
  background-color: rgb(255, 255, 255) !important;
  border-radius: 4px !important;
  ${(props) => (String(props.index) === '0' ? null : 'margin-left: 8px !important;')};
`;

export default li;
