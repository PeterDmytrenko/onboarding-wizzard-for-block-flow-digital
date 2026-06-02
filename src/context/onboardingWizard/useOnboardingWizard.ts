import { useContext } from "react";
import OnboardingWizardContext from "./OnboardingWizardContext";
import {
  FIELD_CURRENT_WEIGHT,
  FIELD_GOAL_WEIGHT,
  FIELD_SELECTED_WISH,
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

  const isStepValid = (step: number) => {
    if (step === 1) {
      return !(
        ctx.errors[FIELD_SELECTED_WISH] ||
        !ctx.storageFields[FIELD_SELECTED_WISH]
      );
    }
    if (step === 2) {
      return !(
        ctx.errors[FIELD_WEIGHT_UNIT] ||
        ctx.errors[FIELD_CURRENT_WEIGHT] ||
        !ctx.storageFields[FIELD_CURRENT_WEIGHT]
      );
    }

    if (step === 3) {
      return !(
        ctx.errors[FIELD_WEIGHT_UNIT] ||
        ctx.errors[FIELD_GOAL_WEIGHT] ||
        !ctx.storageFields[FIELD_GOAL_WEIGHT]
      );
    }

    return true;
  };

  const goNext = () => {
    if (ctx.currentStep < TOTAL_STEPS && isStepValid(ctx.currentStep)) {
      ctx.setCurrentStep(ctx.currentStep + 1);
    }
  };

  const goBack = () => {
    if (ctx.currentStep > 1) {
      ctx.setCurrentStep(ctx.currentStep - 1);
    }
  };

  return {
    fields: ctx.storageFields,
    currentStep: ctx.currentStep,
    setValue: ctx.setField,
    isStepValid,
    handleWeightUnitChange: ctx.handleWeightUnitChange,
    goNext,
    goBack,
    reset: ctx.reset,
    errors: ctx.errors,
  };
};
