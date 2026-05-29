import styled from "@emotion/styled";
import { theme } from "../../theme";
import { getCustomSize } from "../../utils/styles";

export const OnboardingHeader = styled.header`
  background-color: ${theme.colors.bgHeader};
  border-bottom: 1px solid ${theme.colors.headerBorderColor};
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

export const EmptyBlock = styled.div<{ size: string | number }>`
  ${({ size }) => getCustomSize(size)}
`;
