import styled from 'styled-components';
import color from 'libs/ui/src/styles/colors';
import resetCSS from 'libs/ui/src/styles/reset';
import { HhhProps } from "./Hhh.types"

type TStyleProps = Pick<HhhProps, 'isDisabled'>;

const DivStyled = styled.div<TStyleProps>`
  ${resetCSS};
  background-color: ${(p) => p.isDisabled ? color.greyDisabled : color.white};
  display: block;
  width: 100%;
`;
DivStyled.displayName = 'Hhh';

export default {
  DivStyled,
};
