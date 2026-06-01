import ProgressBar from "../uiComponents/progressBar/ProgressBar";
import * as S from "../feature/onboarding/styled";
import ButtonIcon from "../uiComponents/buttonIcon";
import ChevronLeft from "../assets/icons/chevron-left.svg?react";
import { useEffect, useMemo, useRef, useState } from "react";
import WishScreen from "../feature/onboarding/wishScreen";
import OnboardingWizardProvider from "../context/onboardingWizard/OnboardingWizardProvider";
import { useOnboardingWizard } from "../context/onboardingWizard/useOnboardingWizard";
import CurrentWeightScreen from "../feature/onboarding/currentWeightScreen";
import Button from "../uiComponents/button";
import {
  FORM_CURRENT_WEIGHT,
  FORM_WISH,
} from "../feature/onboarding/constants";
import type { AnimationStepsState } from "../feature/onboarding/types";
import { TOTAL_STEPS } from "../feature/onboarding/constants";
import GoalWeightScreen from "../feature/onboarding/goalWeightScreen";

const formIdByStep: Record<string, string> = {
  "1": FORM_WISH,
  "2": FORM_CURRENT_WEIGHT,
};

const OnboardingContent = () => {
  const { currentStep, goBack, isStepValid } = useOnboardingWizard();

  const [direction, setDirection] = useState<AnimationStepsState>("forward");
  const prevStepRef = useRef<number>(currentStep);

  useEffect(() => {
    const prevStep = prevStepRef.current;
    if (currentStep > prevStep) {
      setDirection("forward");
    } else if (currentStep < prevStep) {
      setDirection("backward");
    }
    prevStepRef.current = currentStep;
  }, [currentStep]);

  const isDisabled = !isStepValid(currentStep);

  const getProgressPercentage = () => (currentStep / TOTAL_STEPS) * 100;

  const renderScreen = useMemo(() => {
    switch (currentStep) {
      case 1:
        return <WishScreen />;
      case 2:
        return <CurrentWeightScreen />;
      case 3:
        return <GoalWeightScreen />;
      default:
        <WishScreen />;
    }
  }, [currentStep]);
  return (
    <S.ScreenContainer>
      <S.OnboardingHeader>
        <S.OnboardingHeaderInner>
          {currentStep === 1 ? (
            <S.EmptyBlock size="3rem" />
          ) : (
            <ButtonIcon Icon={ChevronLeft} onClick={goBack} />
          )}

          <ProgressBar percents={getProgressPercentage()} />

          <S.EmptyBlock size="3rem" />
        </S.OnboardingHeaderInner>
      </S.OnboardingHeader>

      <S.ContentWrapper key={currentStep} direction={direction}>
        {renderScreen}
      </S.ContentWrapper>

      <S.FooterActions>
        <Button
          form={formIdByStep[String(currentStep)]}
          type="submit"
          label="Continue"
          disabled={isDisabled}
        />
      </S.FooterActions>
    </S.ScreenContainer>
  );
};

const OnboardingPage = () => (
  <OnboardingWizardProvider>
    <OnboardingContent />
  </OnboardingWizardProvider>
);

export default OnboardingPage;
