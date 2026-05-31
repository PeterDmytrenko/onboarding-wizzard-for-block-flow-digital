import { useContext } from "react";
import OnboardingWizardContext from "./OnboardingWizardContext";
import type { OnboardingWizardFields } from "./types";
import { validators } from "../../feature/onboarding/wishScreen/wishRadioGroup/utils";
import {
  FIELD_WEIGHT_UNIT,
  TOTAL_STEPS,
} from "../../feature/onboarding/constants";

export const useOnboardingWizard = () => {
  const ctx = useContext(OnboardingWizardContext);
  if (!ctx) {
    throw new Error(
      "useOnboardingWizard must be used inside OnboardingWizardProvider"
    );
  }

  const getFieldError = (
    key: keyof Omit<OnboardingWizardFields, typeof FIELD_WEIGHT_UNIT>
  ): boolean | string | null => validators[key](ctx.storageFields[key]);

  const isStepValid = (
    key: keyof Omit<OnboardingWizardFields, typeof FIELD_WEIGHT_UNIT>
  ) => {
    const error = getFieldError(key);

    return error === true || error === null;
  };

  // const isAllValid = (
  //   Object.keys(validators) as (keyof OnboardingWizardFields)[]
  // ).every(isStepValid);

  const goNext = () => {
    if (ctx.currentStep < TOTAL_STEPS) {
      ctx.setCurrentStep(ctx.currentStep + 1);
    }
  };

  const goBack = () => {
    if (ctx.currentStep > 1) {
      ctx.setCurrentStep(ctx.currentStep - 1);
    }
  };

  const isLastStep = ctx.currentStep === TOTAL_STEPS;

  return {
    fields: ctx.storageFields,
    currentStep: ctx.currentStep,
    setValue: ctx.setField,
    getFieldError,
    isStepValid,
    // isAllValid,
    goNext,
    goBack,
    isLastStep,
    reset: ctx.storageFields,
  };
};
