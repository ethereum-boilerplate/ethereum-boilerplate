import styled from 'styled-components';
import resetCSS from '../../styles/reset';

const DivStyled = styled.div`
  ${resetCSS};
  align-items: center;
  background: #fff;
  border-bottom: 2px solid rgba(0, 0, 0, 0.06);
  display: flex;
  padding: 0 10px;
  position: fixed;
  width: 100%;
  z-index: 1;
`;
DivStyled.displayName = 'Header';

export default {
  DivStyled,
};
