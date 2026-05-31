import { useState } from "react";
import {
  FIELD_CURRENT_WEIGHT,
  FIELD_GOAL_WEIGHT,
  FIELD_SELECTED_WISH,
} from "../../feature/onboarding/constants";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import OnboardingWizardContext from "./OnboardingWizardContext";
import type { OnboardingWizardFields } from "./types";

const ONBOARDING_VALUES_STORAGE_KEY = "onboarding_values";
const ONBOARDING_STEP_STORAGE_KEY = "onboarding_step";

const initialDefaultFields: OnboardingWizardFields = {
  [FIELD_SELECTED_WISH]: "",
  [FIELD_CURRENT_WEIGHT]: "",
  [FIELD_GOAL_WEIGHT]: "",
};

const OnboardingWizardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [defaultFields, setDefaultFields] = useState(initialDefaultFields);
  const [storageFields, modifyStorageFields] =
    useLocalStorage<OnboardingWizardFields>(
      ONBOARDING_VALUES_STORAGE_KEY,
      defaultFields
    );
  const [currentStep, setCurrentStep] = useLocalStorage<number>(
    ONBOARDING_STEP_STORAGE_KEY,
    1
  );

  const setField = (key: keyof OnboardingWizardFields, value: string) => {
    modifyStorageFields((prev) => ({ ...prev, [key]: value }));
  };

  const modifyDefaultFields = (
    key: keyof OnboardingWizardFields,
    value: string
  ) => {
    setDefaultFields((prev) => ({ ...prev, [key]: value }));
  };

  const reset = () => {
    modifyStorageFields({
      [FIELD_SELECTED_WISH]: "",
      [FIELD_CURRENT_WEIGHT]: "",
      [FIELD_GOAL_WEIGHT]: "",
    });
    setCurrentStep(1);
  };

  return (
    <OnboardingWizardContext.Provider
      value={{
        storageFields,
        setField,
        currentStep,
        setCurrentStep,
        reset,
        modifyDefaultFields,
      }}
    >
      {children}
    </OnboardingWizardContext.Provider>
  );
};

export default OnboardingWizardProvider;
