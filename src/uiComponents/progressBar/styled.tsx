import styled from "@emotion/styled";
import { theme, type ThemeColor } from "../../theme";

export const ProgressBarRoot = styled.div`
  flex: 1;
  max-width: 100%;
`;

export const ProgressBarTrack = styled.div<{ trackBgColor: ThemeColor }>`
  height: 6px;
  background-color: ${({ trackBgColor }) => trackBgColor};
  border-radius: 100px;
  width: 100%;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div<{ percent: number }>`
  height: 100%;
  width: ${(props) => props.percent}%;
  background: ${theme.colors.bgProgressBarFill};
  border-radius: 100px;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;
