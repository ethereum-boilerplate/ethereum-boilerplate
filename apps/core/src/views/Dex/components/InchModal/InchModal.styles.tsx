import styled from 'styled-components';
import { resetCSS } from '@ethereum-boilerplate-v2/ui';

const DivContainerStyled = styled.div`
  ${resetCSS};
  overflow: auto;
  height: 500px;
`;
const DivStyled = styled.div`
  ${resetCSS};
  padding: 5px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SpanStyled = styled.span`
  ${resetCSS};
  font-weight: 600;
  font-size: 15px;
  line-height: 14px;
`;

export default {
  DivContainerStyled,
  DivStyled,
  SpanStyled,
};
