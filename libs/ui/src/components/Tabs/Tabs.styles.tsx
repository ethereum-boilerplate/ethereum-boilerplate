import styled from 'styled-components';
import resetCSS from '../../styles/reset';

const DivStyled = styled.div`
  ${resetCSS};
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  gap: 32px;
  justify-content: 'center';
  padding: 0px;
  width: '100%';
  @media all and (max-width: 414px) {
    display: none;
  }
`;
const DivIconStyled = styled.div`
  cursor: pointer;
  display: none;
  position: absolute;
  right: 8px;
  top: 8px;
  @media all and (max-width: 414px) {
    display: flex;
  }
`;
export default {
  DivStyled,
  DivIconStyled,
};
