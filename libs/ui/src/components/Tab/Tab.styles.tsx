import styled, { css } from 'styled-components';
import resetCSS from '../../styles/reset';
import color from '../../styles/colors';
import { Typography } from 'web3uikit';
import { NavLink } from 'react-router-dom';

const StyledTabLine = styled.div`
  ${resetCSS};
  background: ${color.blue};
  border-radius: 6px 6px 0px 0px;
  height: 4px;
  width: 100%;
  display: none;
  margin-top: 5px;

  }
`;
const StyledTabParent = styled(NavLink)`
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
    ${StyledTabLine} {
      display: block;
    }
    ${Typography} {
      color: ${color.blue};
    }
  }
`;

export default {
  StyledTabParent,
  StyledTabLine,
};
