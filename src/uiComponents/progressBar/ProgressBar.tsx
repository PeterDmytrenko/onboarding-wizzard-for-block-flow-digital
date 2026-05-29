import { memo } from "react";
import { theme, type ThemeColor } from "../../theme";
import * as S from "./styled";

type Props = {
  trackBgColor?: ThemeColor;
};

const ProgressBar = ({ trackBgColor = theme.colors.bgColor }: Props) => {
  return (
    <S.ProgressBarRoot>
      <S.ProgressBarTrack trackBgColor={trackBgColor}>
        <S.ProgressBarFill percent={45} />
      </S.ProgressBarTrack>
    </S.ProgressBarRoot>
  );
};

export default memo(ProgressBar);
