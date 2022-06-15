import styled from 'styled-components';
import resetCSS from '../../styles/reset';

const TabsStyled = styled.div`
  ${resetCSS};
  align-items: flex-start;
  flex-direction: row;
  gap: 32px;
  justify-content: 'center';
  padding: 0px;
  width: '100%';
`;
const DivIconStyled = styled.div`
  cursor: pointer;
  position: absolute;
  right: 8px;
  top: 8px;
`;
export default {
  TabsStyled,
  DivIconStyled,
};
