export interface TabProps {
  /**
   * Name of the Tab
   */
  name: string;
  /**
   * path
   */
  href: string;
  /**
   * call back function
   */
  onClick?: () => void;
}

export interface StyledTabProps {
  isActive: boolean;
}
