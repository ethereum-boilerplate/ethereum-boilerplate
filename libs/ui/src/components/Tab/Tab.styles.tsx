import styled from 'styled-components';
import color from 'libs/ui/src/styles/colors';
import resetCSS from 'libs/ui/src/styles/reset';
import { TabProps } from "./Tab.types"

type TStyleProps = Pick<TabProps, 'isDisabled'>;

const DivStyled = styled.div<TStyleProps>`
  ${resetCSS};
  background-color: ${(p) => p.isDisabled ? color.greyDisabled : color.white};
  display: block;
  width: 100%;
`;
DivStyled.displayName = 'Tab';

export default {
  DivStyled,
};
