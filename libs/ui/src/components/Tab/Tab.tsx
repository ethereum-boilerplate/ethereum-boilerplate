import React from 'react';
import { TabProps } from './Tab.types';
import styles from './Tab.styles';

const { StyledTab, StyledTabLine, StyledTabParent } = styles;

export const Tab: React.FC<TabProps> = ({
  activeState = true,
  tabName = 'test',
  onClick,
}) => {
  return (
    <StyledTabParent isActive={activeState} onClick={onClick}>
      <StyledTab isActive={activeState}>{tabName}</StyledTab>
      <StyledTabLine isActive={activeState} />
    </StyledTabParent>
  );
};

export default Tab;
