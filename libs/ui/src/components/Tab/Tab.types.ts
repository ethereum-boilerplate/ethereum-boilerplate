export interface TabProps {
  /**
   * Name of the Tab
   */
  tabName: string;

  /**
   * Is the tab active, used to override normal logic
   */
  activeState?: boolean;
  /**
   * call back function
   */
  onClick?: () => void;
}

export interface StyledTabProps {
  isActive: boolean;
}
