import styled, { css } from 'styled-components';
import resetCSS from '../../styles/reset';
import color from '../../styles/colors';
import { Typography } from 'web3uikit';
import { NavLink } from 'react-router-dom';
import { TabProps } from './Tab.types';

const StyledTabLine = styled.div`
  ${resetCSS};
  background: ${color.blue};
  border-radius: 6px 6px 0px 0px;
  height: 4px;
  width: 100%;
  display: none;
  margin-top: 5px;
`;

const activeStyle = css`
  ${StyledTabLine} {
    display: block;
  }
  ${Typography} {
    color: ${color.blue};
  }
`;

const StyledTabParent = styled(NavLink)<Pick<TabProps, 'isActive'>>`
  cursor: pointer;
  gap: 20px;
  padding: 0px;
  min-width: 46px;
  height: 48px;
  display: inline-block;
  text-align: center;
  text-decoration: none;

  &:hover {
    ${Typography} {
      color: ${color.blue};
    }
    ${StyledTabLine} {
      display: block;
    }
  }
  &:active {
    ${activeStyle}
  }
  ${(p) => p.isActive && activeStyle}
`;

export default {
  StyledTabParent,
  StyledTabLine,
};
