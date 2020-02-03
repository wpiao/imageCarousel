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

  /* Borders */
  ${(props) => (props.border_top ? `border-top: ${props.border_top}px;` : null)}
  ${(props) => (props.border_bottom ? `border-bottom: ${props.border_bottom}px;` : null)}
  ${(props) => (props.border_top2 ? `border-top: ${props.border_top2};` : null)}
  ${(props) => (props.border_bottom2 ? `border-bottom: ${props.border_bottom2};` : null)}

  /* Margin & Padding*/
  ${(props) => (props.padding ? `padding: ${props.padding}px;` : null)}
  ${(props) => (props.padding_top ? `padding-top: ${props.padding_top}px;` : null)}
  ${(props) => (props.padding_bottom ? `padding-bottom: ${props.padding_bottom}px;` : null)}
  ${(props) => (props.padding_left ? `padding-left: ${props.padding_left}px;` : null)}
  ${(props) => (props.padding_right ? `padding-right: ${props.padding_right}px;` : null)}
  ${(props) => (props.margin ? `margin: ${props.margin}px;` : null)}
  ${(props) => (props.right_margin ? `margin-right: ${props.right_margin}px;` : null)}
  ${(props) => (props.top_margin ? `margin-top: ${props.top_margin}px;` : null)}
  ${(props) => (props.left_margin ? `margin-left: ${props.left_margin}px;` : null)}
  ${(props) => (props.bottom_margin ? `margin-bottom: ${props.bottom_margin}px;` : null)}
  ${(props) => (props.margin_leftauto ? 'margin-left: auto;' : null)}
  ${(props) => (props.margin_rightauto ? 'margin-right: auto;' : null)}

  /* Height & Width */
  ${(props) => (props.flex_basis ? `flex-basis: ${props.flex_basis}px;` : null)};
  ${(props) => (props.widthvw ? `width: ${props.widthvw}vw;` : null)};
  ${(props) => (props.heightvh ? `height: ${props.heightvh}vh;` : null)};
  ${(props) => (props.widthpercent ? `width: ${props.widthpercent}%;` : null)};
  ${(props) => (props.heightpercent ? `height: ${props.heightpercent}%;` : null)};
  ${(props) => (props.height ? `height: ${props.height}px;` : null)};
  ${(props) => (props.width ? `width: ${props.width}px;` : null)};
  ${(props) => (props.widthauto ? 'width: auto;' : null)};
  ${(props) => (props.min_height ? `min-height: ${props.min_height}px;` : null)};
  ${(props) => (props.min_heightvh ? `min-height: ${props.min_heightvh}vh;` : null)};
  ${(props) => (props.min_width ? `min-width: ${props.min_width}px;` : null)};
  ${(props) => (props.max_width ? `max-width: ${props.max_width}px;` : null)};
  ${(props) => (props.max_widthpercent ? `max-width: ${props.max_widthpercent}%;` : null)};
  ${(props) => (props.max_widthvh ? `max-width: ${props.max_widthvh}vh;` : null)};
  ${(props) => (props.max_widthvw ? `max-width: ${props.max_widthvw}vw;` : null)};

  /* left: auto;
  z-index: 1; */
  ${(props) => (props.overflow_y ? `overflow-y: ${props.overflow_y};` : null)};
  ${(props) => (props.overflow ? `overflow: ${props.overflow};` : null)};
  ${(props) => (props.word_break ? `word-break: ${props.word_break};` : null)};
  ${(props) => (props.z_index ? `z-index: ${props.z_index};` : null)};
  ${(props) => (props.background ? `background: ${props.background};` : null)};
  ${(props) => (props.background_color ? `background-color: ${props.background_color};` : null)};
  ${(props) => (props.blur === 'left' ? 'transform: rotate(180deg) !important;' : null)};
  ${(props) => (props.blur ? 'background: linear-gradient(270deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 90.82%) !important;' : null)};
`;

export default containerDiv;
