import type {
  FIELD_CURRENT_WEIGHT,
  FIELD_GOAL_WEIGHT,
  FIELD_SELECTED_WISH,
  FIELD_WEIGHT_UNIT,
  KG_WEIGHT_UNIT,
  LBS_WEIGHT_UNIT,
} from "../../feature/onboarding/constants";

export type WeightUnit = typeof LBS_WEIGHT_UNIT | typeof KG_WEIGHT_UNIT;

export type OnboardingWizardFields = {
  [FIELD_SELECTED_WISH]: string;
  [FIELD_CURRENT_WEIGHT]: string;
  [FIELD_GOAL_WEIGHT]: string;
  [FIELD_WEIGHT_UNIT]: WeightUnit;
};

export type OnboardingWizardFieldErrors = {
  [FIELD_SELECTED_WISH]: boolean;
  [FIELD_CURRENT_WEIGHT]: boolean;
  [FIELD_GOAL_WEIGHT]: boolean;
  [FIELD_WEIGHT_UNIT]: boolean;
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
  handleWeightUnitChange: (value: string) => void
  errors: OnboardingWizardFieldErrors
};
