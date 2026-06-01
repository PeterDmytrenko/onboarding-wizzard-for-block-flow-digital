import { useCallback, useState } from "react";
import {
  FIELD_CURRENT_WEIGHT,
  FIELD_GOAL_WEIGHT,
  FIELD_SELECTED_WISH,
  FIELD_WEIGHT_UNIT,
  KG_WEIGHT_UNIT,
  LBS_WEIGHT_UNIT,
  WEIGHT_UNIT_OPTIONS,
} from "../../feature/onboarding/constants";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import OnboardingWizardContext from "./OnboardingWizardContext";
import type {
  OnboardingWizardFieldErrors,
  OnboardingWizardFields,
  WeightUnit,
} from "./types";
import { convertWeight } from "../../utils/onboarding";
import { validators } from "../../feature/onboarding/wishScreen/wishRadioGroup/utils";

const ONBOARDING_VALUES_STORAGE_KEY = "onboarding_values";
const ONBOARDING_STEP_STORAGE_KEY = "onboarding_step";

const initialDefaultFields: OnboardingWizardFields = {
  [FIELD_SELECTED_WISH]: "",
  [FIELD_CURRENT_WEIGHT]: "",
  [FIELD_GOAL_WEIGHT]: "",
  [FIELD_WEIGHT_UNIT]: WEIGHT_UNIT_OPTIONS[0].value,
};

const initialErrors: OnboardingWizardFieldErrors = {
  [FIELD_SELECTED_WISH]: false,
  [FIELD_CURRENT_WEIGHT]: false,
  [FIELD_GOAL_WEIGHT]: false,
  [FIELD_WEIGHT_UNIT]: false,
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
  const [errors, setErrors] = useState(initialErrors);

  const getFieldError = useCallback(
    (
      key: keyof Omit<OnboardingWizardFields, typeof FIELD_WEIGHT_UNIT>,
      value: string
    ) => {
      let currentError = false;

      if (key === FIELD_CURRENT_WEIGHT || key === FIELD_GOAL_WEIGHT) {
        currentError = validators[key](value, storageFields[FIELD_WEIGHT_UNIT]);

        setErrors((prev) => ({ ...prev, [key]: currentError }));
        return;
      }

      currentError = validators[key](value);

      setErrors((prev) => ({ ...prev, [key]: currentError }));
    },
    [storageFields]
  );

  const setField = (key: keyof OnboardingWizardFields, value: string) => {
    if (key !== FIELD_WEIGHT_UNIT) {
      getFieldError(key, value);
    }

    modifyStorageFields((prev) => ({ ...prev, [key]: value }));
  };

  const handleWeightUnitChange = useCallback(
    (value: string) => {
      let convertedCurrentWeight = "";
      let convertedGoalWeight = "";

      if (value === LBS_WEIGHT_UNIT) {
        convertedCurrentWeight = convertWeight(
          storageFields.currentWeight,
          KG_WEIGHT_UNIT,
          LBS_WEIGHT_UNIT
        );
        convertedGoalWeight = convertWeight(
          storageFields.goalWeight,
          KG_WEIGHT_UNIT,
          LBS_WEIGHT_UNIT
        );
      }

      if (value === KG_WEIGHT_UNIT) {
        convertedCurrentWeight = convertWeight(
          storageFields.currentWeight,
          LBS_WEIGHT_UNIT,
          KG_WEIGHT_UNIT
        );
        convertedGoalWeight = convertWeight(
          storageFields.goalWeight,
          LBS_WEIGHT_UNIT,
          KG_WEIGHT_UNIT
        );
      }

      modifyStorageFields({
        ...storageFields,
        weightUnit: value as WeightUnit,
        currentWeight: convertedCurrentWeight,
        goalWeight: convertedGoalWeight,
      });
    },
    [modifyStorageFields, storageFields]
  );

  const modifyDefaultFields = (
    key: keyof OnboardingWizardFields,
    value: string
  ) => {
    setDefaultFields((prev) => ({ ...prev, [key]: value }));
  };

  const reset = () => {
    modifyStorageFields(initialDefaultFields);
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
        handleWeightUnitChange,
        errors,
      }}
    >
      {children}
    </OnboardingWizardContext.Provider>
  );
};

export default OnboardingWizardProvider;
