import styled from "@emotion/styled";
import { slideInLeft, slideInRight, theme } from "../../theme";
import { getCustomSize } from "../../utils/styles";
import type { AnimationStepsState } from "./types";

export const OnboardingHeader = styled.header`
  background-color: ${theme.colors.bgWhite};
  border-bottom: 1px solid ${theme.colors.borderSecondary};
  height: 4.5rem;
  padding-inline: 1.5rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;

  @media (max-width: 767px) {
    padding-inline: 0.75rem;
  }
`;

export const OnboardingHeaderInner = styled.div`
  align-items: center;
  display: flex;
  gap: 2.5rem;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 75rem;
  width: 100%;

  @media (max-width: 1239px) {
    gap: 1.5rem;
  }

  @media (max-width: 767px) {
    gap: 0.75rem;
  }
`;

export const ContentWrapper = styled.div<{ direction: AnimationStepsState }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  padding-top: 3.5rem;
  overflow: visible;

  animation: ${({ direction }) =>
      direction === "forward" ? slideInRight : slideInLeft}
    0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

export const EmptyBlock = styled.div<{ size: string | number }>`
  ${({ size }) => getCustomSize(size)}
`;
