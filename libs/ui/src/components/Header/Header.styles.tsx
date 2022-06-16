import styled from 'styled-components';
import resetCSS from '../../styles/reset';

const DivStyled = styled.div`
  ${resetCSS};
  display: flex;
  justify-content: space-evenly;
  align-item: center;
`;
DivStyled.displayName = 'Header';

export default {
  DivStyled,
};
