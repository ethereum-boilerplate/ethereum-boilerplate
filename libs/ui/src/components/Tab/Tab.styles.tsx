import styled, { css } from 'styled-components';
import resetCSS from '../../styles/reset';
import { StyledTabProps } from './Tab.types';
import color from '../../styles/colors';
import { Typography } from 'web3uikit';

const StyledTabParent = styled.div<StyledTabProps>`
  ${resetCSS};
  cursor: pointer;
  gap: 20px;
  padding: 0px;
  min-width: 46px;
  height: 48px;
  display: inline-block;
  text-align: center;
  &:hover {
    ${Typography} {
      color: ${color.blue};
    }
  }
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
  StyledTabParent,
  StyledTabLine,
};
