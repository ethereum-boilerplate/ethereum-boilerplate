import React from 'react';
import { TabProps } from './Tab.types';
import styles from './Tab.styles';
import { Typography } from 'web3uikit';

const { StyledTabLine, StyledTabParent } = styles;

export const Tab: React.FC<TabProps> = ({
  name = 'test',
  href = '#',
  onClick,
}) => {
  return (
    <StyledTabParent
      to={href}
      onClick={onClick}
      style={({ isActive }) => ({
        color: isActive ? '#fff' : '#545e6f',
        background: isActive ? '#7600dc' : '#f0f0f0',
      })}
    >
      <Typography variant="body16" weight="550">
        {name}
      </Typography>
      <StyledTabLine />
    </StyledTabParent>
  );
};

export default Tab;
