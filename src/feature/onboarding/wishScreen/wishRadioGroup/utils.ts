import type {
  OnboardingWizardFields,
  WeightUnit,
} from "../../../../context/onboardingWizard/types";
import {
  FIELD_CURRENT_WEIGHT,
  FIELD_GOAL_WEIGHT,
  FIELD_SELECTED_WISH,
  FIELD_WEIGHT_UNIT,
  KG_WEIGHT_UNIT,
  LBS_WEIGHT_UNIT,
  MAX_KG_WEIGHT,
  MAX_LBS_WEIGHT,
  MIN_KG_WEIGHT,
  MIN_LBS_WEIGHT,
} from "../../constants";

export const validators: Record<
  keyof Omit<OnboardingWizardFields, typeof FIELD_WEIGHT_UNIT>,
  (v: string, w?: WeightUnit) => boolean
> = {
  [FIELD_SELECTED_WISH]: (v: string) => (v ? false : true),
  [FIELD_CURRENT_WEIGHT]: (v: string, w?: WeightUnit) => {
    if (!v.trim()) {
      return true;
    }

    const value = Number(v);

    if (isNaN(value)) {
      console.error("Invalid number:", v);
      return true;
    }

    if (w === LBS_WEIGHT_UNIT) {
      return value < MIN_LBS_WEIGHT || value > MAX_LBS_WEIGHT;
    }

    if (w === KG_WEIGHT_UNIT) {
      console.log(value < MIN_KG_WEIGHT || value > MAX_KG_WEIGHT);
      return value < MIN_KG_WEIGHT || value > MAX_KG_WEIGHT;
    }

    return false;
  },
  [FIELD_GOAL_WEIGHT]: (v: string, w?: WeightUnit) => {
    if (!v.trim()) {
      return true;
    }

    const value = Number(v);

    if (isNaN(value)) {
      console.error("Invalid number:", v);
      return true;
    }

    if (w === LBS_WEIGHT_UNIT) {
      return value < MIN_LBS_WEIGHT || value > MAX_LBS_WEIGHT;
    }

    if (w === KG_WEIGHT_UNIT) {
      return value < MIN_KG_WEIGHT || value > MAX_KG_WEIGHT;
    }

    return false;
  },
};
