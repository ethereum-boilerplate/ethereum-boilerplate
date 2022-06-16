import React from 'react';
import { TabProps } from './Tab.types';
import styles from './Tab.styles';
import { Typography } from 'web3uikit';

const { StyledTabLine, StyledTabParent } = styles;

export const Tab: React.FC<TabProps> = ({
  name = 'test',
  to = '#',
  onClick,
  isActive,
}) => {
  return (
    <StyledTabParent {...{ to, onClick, isActive }}>
      <Typography variant="body16" weight="550">
        {name}
      </Typography>
      <StyledTabLine />
    </StyledTabParent>
  );
};

export default Tab;
