import styled from 'styled-components';

const fontDiv = styled.div`
  ${(props) => (props.font_family ? `font-family: ${props.font_family};` : null)};
  ${(props) => (props.font_size ? `font-size: ${props.font_size}px;` : null)};
  ${(props) => (props.font_weight ? `font-weight: ${props.font_weight};` : null)};
  ${(props) => (props.margin ? `margin: ${props.margin}px;` : null)}
  ${(props) => (props.line_heightem ? `line-height: ${props.line_heightem}em;` : null)}
  color: rgb(72, 72, 72) !important;
  ${(props) => (props.color ? `color: ${props.color};` : null)}
  cursor:pointer;

  ${(props) => (props.hover ? `:hover {
  text-decoration: underline;
}` : null)}
`;

export default fontDiv;

