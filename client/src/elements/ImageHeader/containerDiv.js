import styled from 'styled-components';

const containerDiv = styled.div`
  ${(props) => (props.box ? `box-sizing: ${props.box};` : null)}
  ${(props) => (props.whitespace ? `white-space: ${props.whitespace};` : null)}
  ${(props) => (props.line_height ? `line-height: ${props.line_height};` : null)}
  ${(props) => (props.display ? `display: ${props.display};` : null)}
  ${(props) => (props.justify_content ? `justify-content: ${props.justify};` : null)}
  ${(props) => (props.align_items ? `align-items: ${props.align_items};` : null)}
  ${(props) => (props.align_self ? `align-self: ${props.align_self};` : null)}
  ${(props) => (props.position ? `position: ${props.position};` : null)}
  ${(props) => (props.top ? `top: ${props.top}px;` : null)}
  ${(props) => (props.right ? `right: ${props.right}px;` : null)}
  ${(props) => (props.bottom ? `bottom: ${props.bottom}px;` : null)};
  ${(props) => (props.left_margin ? `margin-left: ${props.left_margin}px;` : null)}
  left: auto;
  z-index: 1;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;

export default containerDiv;
