import styled from "@emotion/styled";
import { theme } from "../../../theme";

export const SimulatedProgressRoot = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SimulatedProgressTextBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SimulatedProgressMainInfo = styled.p`
  color: ${theme.colors.mainTextColor};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.25;
`;

export const SimulatedProgressDescription = styled.p`
  color: ${theme.colors.neutralSecondary};
  font-size: 1.125rem;
  font-weight: 200;
  line-height: 1.25;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
