import styled from "@emotion/styled";
import { getCustomSize } from "../../utils/styles";
import type { ComponentProps } from "react";
import { theme } from "../../theme";

type BaseButtonProps = {
  customSize: string | number;
  customIconSize: string | number;
} & ComponentProps<"button">;

const BaseButtonRoot = styled.button<BaseButtonProps>`
  align-items: center;
  border-radius: ${theme.radius.buttonRadius};
  border: none;
  color: ${theme.colors.mainTextColor};
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: ${theme.transitions.default};

  ${({ customSize }) => getCustomSize(customSize)}

  &:active {
    transform: scale(0.95);
  }
`;

const TransparentLight = styled(BaseButtonRoot)`
  background-color: transparent;

  &:hover {
    background-color: #f1f5f9;
  }
`;

export const BUTTON_ICON_COMPONENT = {
  transparentLight: TransparentLight,
};
