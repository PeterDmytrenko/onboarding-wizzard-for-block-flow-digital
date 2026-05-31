import styled from "@emotion/styled";
import { getCustomSize } from "../../utils/styles";
import { theme } from "../../theme";

type BaseButtonProps = {
  customSize?: string | number;
};

const BaseButtonRoot = styled.button<BaseButtonProps>`
  align-items: center;
  border-radius: ${theme.radius.lg};
  border: none;
  color: ${theme.colors.textLight};
  cursor: pointer;
  display: flex;
  font-size: 1.125rem;
  font-weight: 400;
  justify-content: center;
  line-height: 1.25;
  padding: 0.75rem 3.25rem;
  transition: ${theme.transitions.default};
  ${({ customSize }) => customSize && getCustomSize(customSize)}

  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const Primary = styled(BaseButtonRoot)`
  background: ${theme.colors.primaryLinearGradient};

  &:disabled {
    background: linear-gradient(90deg, #cbecf4 0%, #d0f2e3 100%);
  }

  &:hover:not(:disabled) {
    filter: brightness(0.95);
  }

  &:active &:focus-visible {
    outline: 2px solid ${theme.colors.greenPrimary};
    outline-offset: 2px;
  }
`;

export const BUTTON_COMPONENT = {
  primary: Primary,
};
