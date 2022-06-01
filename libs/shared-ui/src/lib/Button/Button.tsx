import { FC } from "react";
import ButtonStyles from "./Button.styles"
import { IButtonProps } from "./Button.types";

const { ButtonStyled } = ButtonStyles;

export const Button: FC<IButtonProps> = ({ onClick }) => {
    return (
        <ButtonStyled onClick={onClick}>
            Click me
        </ButtonStyled>
    )
}