
import styled from 'styled-components';

const imageButton = styled.button`
  backface-visibility: hidden !important;
  position: relative !important;
  display: inline-block !important;
  vertical-align: bottom !important;
  width: 48px !important;
  height: 48px !important;
  overflow: hidden !important;
  background: transparent !important;
  border-width: 0px !important;
  border-style: initial !important;
  border-color: initial !important;
  border-image: initial !important;
  margin: 0px !important;
  padding: 0px !important;
  border-radius: 4px !important;

  ${(props) => (String(props.currentIndex) === String(props.name)
    ? (`cursor: default !important; 
     opacity: 1 !important; 
     box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 8px 2px, rgb(72, 72, 72) 0px 0px 0px 2px !important;`)
    : (`cursor: pointer;
  opacity: .7 !important;`))};
  
`;

export default imageButton;
