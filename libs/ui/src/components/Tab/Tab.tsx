import React from 'react';
import { TabProps } from './Tab.types';
import styles from './Tab.styles';
import { Typography } from 'web3uikit';
import color from '../../styles/colors';

const { StyledTabLine, StyledTabParent } = styles;

export const Tab: React.FC<TabProps> = ({
  activeState = true,
  tabName = 'test',
  onClick,
}) => {
  return (
    <StyledTabParent isActive={activeState} onClick={onClick}>
      <Typography
        variant="body16"
        weight="550"
        color={activeState ? color.blue : color.grey}
      >
        {tabName}
      </Typography>
      <StyledTabLine isActive={activeState} />
    </StyledTabParent>
  );
};

export default Tab;
