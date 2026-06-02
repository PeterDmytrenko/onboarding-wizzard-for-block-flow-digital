import { memo } from "react";
import * as S from "./styled";
import type { CIRCLE_PROGRESS_CONFIG } from "../../feature/onboarding/constants";

type Props = {
  value: number;
  config: typeof CIRCLE_PROGRESS_CONFIG;
};

const ProgressCircle = (props: Props) => {
  const {
    value,
    config: { radius, strokeWidth },
  } = props;

  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  const size = (radius + strokeWidth) * 2;
  const center = size / 2;
  return (
    <S.ProgressCircleWrapper size={size}>
      <S.SvgContainer width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <S.BackgroundCircle
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <S.ActiveCircle
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </S.SvgContainer>
      <S.PercentageLabel>{value}%</S.PercentageLabel>
    </S.ProgressCircleWrapper>
  );
};

export default memo(ProgressCircle);
