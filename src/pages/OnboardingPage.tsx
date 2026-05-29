import React from "react";
import ProgressBar from "../uiComponents/progressBar/ProgressBar";
import * as S from "../feature/onboarding/styled";
import ButtonIcon from "../uiComponents/buttonIcon";
import ChevronLeft from "../assets/icons/chevron-left.svg?react";

const OnboardingPage: React.FC = () => {
  return (
    <section>
      <S.OnboardingHeader>
        <S.OnboardingHeaderInner>
          <ButtonIcon Icon={ChevronLeft} />

          <ProgressBar />

          <S.EmptyBlock size="3rem" />
        </S.OnboardingHeaderInner>
      </S.OnboardingHeader>
    </section>
  );
};

export default OnboardingPage;
