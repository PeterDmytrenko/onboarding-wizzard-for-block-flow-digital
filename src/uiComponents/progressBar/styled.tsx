import styled from "@emotion/styled";
import { theme } from "../../theme";

export const ProgressBarRoot = styled.div`
  flex: 1;
  max-width: 100%;
`;

export const ProgressBarTrack = styled.div`
  height: 0.5rem;
  background-color: ${theme.colors.bgColor};
  border-radius: 100px;
  width: 100%;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div<{ percents: number }>`
  height: 100%;
  width: ${({ percents }) => percents}%;
  background: ${theme.colors.primaryLinearGradient};
  border-radius: 100px;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;
