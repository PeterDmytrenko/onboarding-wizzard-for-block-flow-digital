import styled from "@emotion/styled";
import { theme } from "../theme";

export const OnboardingMain = styled.main``;

export const AppContainer = styled.div`
  background-color: ${theme.colors.bgSecondary};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const IconWrapper = styled.span`
  align-items: center;
  background: ${theme.colors.bgWhite};
  border-radius: ${theme.radius.sm};
  border: 1px solid ${theme.colors.borderSecondary};
  display: flex;
  justify-content: center;
  padding: 0.125rem;
`
