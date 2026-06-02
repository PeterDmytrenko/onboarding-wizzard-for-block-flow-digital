import styled from "@emotion/styled";
import { getCustomSize } from "../../utils/styles";
import { theme } from "../../theme";
import type { BaseButtonIconProps } from "./types";

const BaseButtonRoot = styled.button<
  Required<Pick<BaseButtonIconProps, "customSize">>
>`
  align-items: center;
  border-radius: ${theme.radius.xl};
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

  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
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
