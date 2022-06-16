export interface TabProps {
  /**
   * Name of the Tab
   */
  name: string;
  /**
   * path
   */
  to: string;
  /**
   * call back function
   */
  onClick?: () => void;

  isActive?: boolean;
}
