import type { FIELD_CURRENT_WEIGHT, FIELD_GOAL_WEIGHT, FIELD_SELECTED_WISH } from "../../feature/onboarding/constants";

export type OnboardingWizardFields = {
  [FIELD_SELECTED_WISH]: string;
  [FIELD_CURRENT_WEIGHT]: string
  [FIELD_GOAL_WEIGHT]: string;
};

export type OnboardingWizardContextValue = {
  storageFields: OnboardingWizardFields;
  setField: (key: keyof OnboardingWizardFields, value: string) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  reset: () => void;
  modifyDefaultFields: (
    key: keyof OnboardingWizardFields,
    value: string
  ) => void;
};
