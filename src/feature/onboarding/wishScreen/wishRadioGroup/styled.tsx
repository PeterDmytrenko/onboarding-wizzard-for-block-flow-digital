import styled from "@emotion/styled";
import { theme } from "../../../../theme";

export const WishRadioGroupRoot = styled.div`
  width: clamp(15rem, 42vw, 36.75rem);
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 2.5rem;
`;

export const WishRadioButtonLabel = styled.label<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;
  border-radius: ${theme.radius.xl};
  border: 2px solid
    ${(props) => (props.isSelected ? theme.colors.greenPrimary : "#e2e8f0")};
  background-color: ${(props) => (props.isSelected ? "#f0fdf4" : "#ffffff")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  user-select: none;

  &:hover {
    border-color: ${(props) => (props.isSelected ? "#10b981" : "#cbd5e1")};
  }

  &:focus-within {
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.4);
  }
`;

export const HiddenRadio = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const EmojiWrapper = styled.span`
  font-size: 24px;
  margin-right: 16px;
  display: flex;
  align-items: center;
`;

export const OptionText = styled.span`
  font-size: 1.375rem;
  font-weight: 400;
  color: ${theme.colors.mainTextColor};
`;
