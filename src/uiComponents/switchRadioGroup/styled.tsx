import styled from "@emotion/styled";
import { theme } from "../../theme";

export const SwitchRadioGroupRoot = styled.div`
  background: ${theme.colors.bgWhite};
  border-radius: 999px;
  box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.04);
  display: inline-grid;
  grid-auto-flow: column;
  padding: 4px 6px;
  position: relative;
`;

export const SwitchRadioGroupThumb = styled.div<{
  count: number;
  activeIndex: number;
}>`
  border-radius: 999px;
  background: ${theme.colors.greenPrimary};
  position: absolute;
  top: 4px;
  left: 6px;
  bottom: 4px;
  transform: translateX(calc(100% * ${({ activeIndex }) => activeIndex}));
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    width 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: calc((100% - 12px) / ${({ count }) => count});
  z-index: 0;
`;

export const SwitchRadioGroupItemOptionLabel = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 2.1875rem;
  justify-content: center;
  min-width: 4.75rem;
  position: relative;
  z-index: 1;
`;

export const SwitchRadioGroupHiddenItem = styled.input`
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
`;

export const SwitchRadioGroupItemLabelText = styled.span<{
  active: boolean;
}>`
  color: ${({ active }) =>
    active ? theme.colors.textLight : theme.colors.mainTextColor};
  font-size: 18px;
  font-weight: 600;
  line-height: 1.25;
  transition: color 250ms ease;
`;
