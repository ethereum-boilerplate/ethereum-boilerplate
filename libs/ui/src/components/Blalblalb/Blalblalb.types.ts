export interface BlalblalbProps {
  /**
   * the component can be set as disabled
   */
  isDisabled?: boolean;

  /**
   * when the input changes it returns its value as a string
   */
  onChange?: (value: string) => void;

  /**
   * the initial value of the input
   */
  value: string;
}
