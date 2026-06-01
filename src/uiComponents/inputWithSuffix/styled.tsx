import styled from "@emotion/styled";
import { theme } from "../../theme";

export const InputWithSuffixRoot = styled.div`
  align-items: center;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  width: 15.9375rem;
`;

export const InputWithMeasurerWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  margin: 0 auto;
  position: relative;
`;

export const InputWithSuffixWrapper = styled.div`
  display: flex;
  padding: 0.75rem;
  position: absolute;
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;

  font-size: 2.75rem;
  font-weight: 400;
  font-family: "Geologica", sans-serif;
  color: ${theme.colors.neutralSecondary};
  text-align: right;

  &::placeholder {
    color: #ccc;
    text-align: right;
  }
`;

export const HiddenMeasurer = styled.span`
  font-size: 2.75rem;
  font-weight: 400;
  visibility: hidden;
  white-space: pre;
  padding: 0.75rem;
`;

export const SuffixText = styled.span`
  color: ${theme.colors.mainTextColor};
  cursor: pointer;
  font-size: 2.75rem;
  font-weight: 400;
  margin-left: 6px;
`;

export const Underline = styled.div<{ hasError: boolean }>`
  background-color: ${(props) =>
    props.hasError
      ? theme.colors.criticalPrimary
      : theme.colors.neutralSecondary};
  transition: ${theme.transitions.default};
  height: 1px;
  width: 100%;
`;

export const ErrorMessage = styled.p<{ hasError: boolean }>`
  color: ${({ hasError }) =>
    hasError ? theme.colors.criticalPressed : theme.colors.neutralTertiary};
  font-size: 1rem;
  line-height: 1.25;
  font-weight: 300;
`;
