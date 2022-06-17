import styled from 'styled-components';
import resetCSS from '../../styles/reset';

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

const ImgStyled = styled.img`
  ${resetCSS};
  height: 32px;
  width: 32px;
  margin-right: 20px;
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
  ImgStyled,
  SpanStyled,
};
