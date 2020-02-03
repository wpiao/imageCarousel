import styled from 'styled-components';

const button = styled.button`
  margin: 0px !important;
  text-decoration: none !important;
  text-align: center;
  height: 36px;
  width: ${(props) => props.width}px;
  border-radius: 4px !important;
  border-width: 1px !important;
  border-style: solid !important;
  background: rgb(255, 255, 255) !important;
  border-color: transparent !important;
  padding-top: var(--spacing-button-small-vertical, 6px) !important;
  padding-bottom: var(--spacing-button-small-vertical, 6px) !important;
  padding-left: var(--spacing-button-small-horizontal, 15px) !important;
  padding-right: var(--spacing-button-small-horizontal, 15px) !important;
  font-weight: var(--font-book-font-weight, 600) !important;
  box-shadow: var(--shadow-button-level0-box-shadow, none) !important;
  cursor: pointer;

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 0px 1px, rgba(255, 255, 255, 0.7) 0px 0px 0px 5px !important;
    outline: none !important;
    transition: box-shadow 0.2s ease 0s !important;
  }
}
`;

export default button;
