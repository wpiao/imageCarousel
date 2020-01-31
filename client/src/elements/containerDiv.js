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
  ${(props) => (props.vertical_align ? `vertical-align: ${props.vertical_align};` : null)}
  ${(props) => (props.box_sizing ? `box-sizing: ${props.box_sizing};` : null)}

  /*Top right left bottom*/
  ${(props) => (props.top ? `top: ${props.top}px;` : null)}
  ${(props) => (props.right ? `right: ${props.right}px;` : null)}
  ${(props) => (props.bottom ? `bottom: ${props.bottom}px;` : null)};
  ${(props) => (props.left ? `left: ${props.left}px;` : null)};

  /* Margin & Padding*/
  ${(props) => (props.padding ? `padding: ${props.padding}px;` : null)}
  ${(props) => (props.padding_top ? `padding-top: ${props.padding_top}px;` : null)}
  ${(props) => (props.right_margin ? `margin-right: ${props.right_margin}px;` : null)}
  ${(props) => (props.top_margin ? `margin-top: ${props.top_margin}px;` : null)}
  ${(props) => (props.left_margin ? `margin-left: ${props.left_margin}px;` : null)}
  ${(props) => (props.bottom_margin ? `margin-bottom: ${props.left_margin}px;` : null)}

  /* Height & Width */
  ${(props) => (props.flex_basis ? `flex-basis: ${props.flex_basis}px;` : null)};
  ${(props) => (props.widthvw ? `width: ${props.widthvw}vw;` : null)};
  ${(props) => (props.heightvh ? `height: ${props.heightvh}vh;` : null)};
  ${(props) => (props.widthpercent ? `width: ${props.widthpercent}%;` : null)};
  ${(props) => (props.heightpercent ? `height: ${props.heightpercent}%;` : null)};
  ${(props) => (props.height ? `height: ${props.height}px;` : null)};
  ${(props) => (props.width ? `width: ${props.width}px;` : null)};
  ${(props) => (props.min_width ? `min-width: ${props.min_width}px;` : null)};

  /* left: auto;
  z-index: 1; */
  ${(props) => (props.z_index ? `z-index: ${props.z_index};` : null)};
`;

export default containerDiv;
