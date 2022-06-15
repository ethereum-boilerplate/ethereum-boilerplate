import styled, { css } from 'styled-components';
import resetCSS from '../../styles/reset';
import { StyledTabProps } from './Tab.types';
import color from '../../styles/colors';

const StyledTab = styled.div<StyledTabProps>`
  ${resetCSS};
  color: ${(props) => (props.isActive ? color.blue : color.grey)};
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  font-weight: 550;
  height: 24px;
  line-height: 24px;
  text-align: center;
  display: inline-block;
  ${(p) =>
    !p.isActive &&
    css`
      &:hover {
        color: ${color.blue};
      }
    `};
`;
const StyledTabParent = styled.div<StyledTabProps>`
  ${resetCSS};
  cursor: pointer;
  gap: 20px;
  padding: 0px;
  min-width: 46px;
  height: 48px;
  display: inline-block;
  ${(p) =>
    !p.isActive &&
    css`
      &:hover ${StyledTabLine} {
        display: inline-block;
      }
    `};
`;
const StyledTabLine = styled.div<StyledTabProps>`
  ${resetCSS};
  background: ${color.blue};
  border-radius: 6px 6px 0px 0px;
  height: 4px;
  width: 100%;
  display: inline-block;
  ${(p) =>
    !p.isActive &&
    css`
      display: none;
    `}

  }
`;
export default {
  StyledTab,
  StyledTabParent,
  StyledTabLine,
};
