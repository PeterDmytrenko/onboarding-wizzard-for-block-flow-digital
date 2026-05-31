import ProgressBar from "../uiComponents/progressBar/ProgressBar";
import * as S from "../feature/onboarding/styled";
import ButtonIcon from "../uiComponents/buttonIcon";
import ChevronLeft from "../assets/icons/chevron-left.svg?react";
import styled from "@emotion/styled";
import { useEffect, useMemo, useRef, useState } from "react";
import WishScreen from "../feature/onboarding/wishScreen";
import OnboardingWizardProvider from "../context/onboardingWizard/OnboardingWizardProvider";
import { useOnboardingWizard } from "../context/onboardingWizard/useOnboardingWizard";
import CurrentWeightScreen from "../feature/onboarding/currentWeightScreen";
import Button from "../uiComponents/button";
import {
  FIELD_CURRENT_WEIGHT,
  FIELD_GOAL_WEIGHT,
  FIELD_SELECTED_WISH,
  FIELD_WEIGHT_UNIT,
  FORM_CURRENT_WEIGHT,
  FORM_WISH,
} from "../feature/onboarding/constants";
import type { OnboardingWizardFields } from "../context/onboardingWizard/types";
import type { AnimationStepsState } from "../feature/onboarding/types";
import { TOTAL_STEPS } from "../feature/onboarding/constants";

const formIdByStep: Record<string, string> = {
  "1": FORM_WISH,
  "2": FORM_CURRENT_WEIGHT,
};

const fieldByStep: Record<string, keyof Omit<OnboardingWizardFields, typeof FIELD_WEIGHT_UNIT>> = {
  "1": FIELD_SELECTED_WISH,
  "2": FIELD_CURRENT_WEIGHT,
  "3": FIELD_GOAL_WEIGHT,
};

const ScreenContainer = styled.section`
  background-color: #f9f9fa;
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  min-height: 100vh;
  padding-top: env(safe-area-inset-top, 0px);
  width: 100%;
`;

const FooterActions = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  padding-bottom: calc(16px + env(safe-area-inset-bottom, 0px));
`;

const OnboardingContent = () => {
  const { currentStep, goBack, getFieldError } = useOnboardingWizard();

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

  const isDisabled = Boolean(getFieldError(fieldByStep[String(currentStep)]));
  console.log(fieldByStep[String(currentStep)], isDisabled);
  const getProgressPercentage = () => (currentStep / TOTAL_STEPS) * 100;

  const renderScreen = useMemo(() => {
    switch (currentStep) {
      case 1:
        return <WishScreen />;
      case 2:
        return <CurrentWeightScreen />;
      case 3:
        return <CurrentWeightScreen />;
      default:
        <WishScreen />;
    }
  }, [currentStep]);
  return (
    <ScreenContainer>
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

      <FooterActions>
        <Button
          form={formIdByStep[String(currentStep)]}
          type="submit"
          label="Continue"
          disabled={isDisabled}
        />
      </FooterActions>
    </ScreenContainer>
  );
};

const OnboardingPage = () => (
  <OnboardingWizardProvider>
    <OnboardingContent />
  </OnboardingWizardProvider>
);

export default OnboardingPage;
