import styled from "@emotion/styled";
import { theme } from "../../theme";

export const ProgressCircleWrapper = styled.div<{size: number}>`
  align-items: center;
  display: flex;
  height: ${({ size }) => size}px;
  justify-content: center;
  position: relative;
  width: ${({ size }) => size}px;
`;

export const SvgContainer = styled.svg`
  transform-origin: 50% 50%;
  transform: rotate(-90deg);
`;

export const BackgroundCircle = styled.circle`
  fill: none;
  stroke: ${theme.colors.bgColor};
`;

export const ActiveCircle = styled.circle`
  fill: none;
  stroke-linecap: round;
  stroke: ${theme.colors.greenPrimary};
  transition: stroke-dashoffset 0.1s ease-out;
`;

export const PercentageLabel = styled.div`
  color: ${theme.colors.greenAccent};
  font-feature-settings: "tnum";
  font-size: 3.5rem;
  font-weight: 400;
  position: absolute;
`;