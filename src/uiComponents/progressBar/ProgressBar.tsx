import { memo } from "react";
import * as S from "./styled";

type Props = {
  percents: number;
};

const ProgressBar = ({ percents }: Props) => {
  return (
    <S.ProgressBarRoot>
      <S.ProgressBarTrack>
        <S.ProgressBarFill percents={percents} />
      </S.ProgressBarTrack>
    </S.ProgressBarRoot>
  );
};

export default memo(ProgressBar);
