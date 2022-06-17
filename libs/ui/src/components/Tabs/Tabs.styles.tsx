import styled from 'styled-components';
import resetCSS from '../../styles/reset';

const TabsStyled = styled.div`
  ${resetCSS};
  display: flex;
  flex-direction: row;
  gap: 32px;
  height: '100%';
  justify-content: 'center';
  margin-left: 50px;
  padding: 0px;
  position: absolute;
  top: 0;
  width: '100%';
`;
const DivIconStyled = styled.div`
  cursor: pointer;
  margin-right: 10px;
  position: absolute;
  right: 8px;
`;
export default {
  TabsStyled,
  DivIconStyled,
};
