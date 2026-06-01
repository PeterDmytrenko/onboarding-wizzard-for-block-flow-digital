import type { WeightUnit } from "../context/onboardingWizard/types";
import {
  KG_TO_LBS,
  KG_WEIGHT_UNIT,
  LBS_WEIGHT_UNIT,
  MAX_KG_WEIGHT,
  MAX_LBS_WEIGHT,
  MIN_KG_WEIGHT,
  MIN_LBS_WEIGHT,
} from "../feature/onboarding/constants";

export function convertWeight(
  value: string,
  from: WeightUnit,
  to: WeightUnit
): string {
  if (!value) {
    return "";
  }

  if (from === to) {
    return value;
  }

  if (from === KG_WEIGHT_UNIT && to === LBS_WEIGHT_UNIT) {
    const convertedValue = (Number(value) * KG_TO_LBS).toFixed(1);

    return convertedValue;
  }

  if (from === LBS_WEIGHT_UNIT && to === KG_WEIGHT_UNIT) {
    const convertedValue = (Number(value) / KG_TO_LBS).toFixed(1);

    return convertedValue;
  }

  return value;
}

const WEIGHT_RANGE: Record<WeightUnit, { min: number; max: number }> = {
  [LBS_WEIGHT_UNIT]: {
    min: MIN_LBS_WEIGHT,
    max: MAX_LBS_WEIGHT,
  },
  [KG_WEIGHT_UNIT]: {
    min: MIN_KG_WEIGHT,
    max: MAX_KG_WEIGHT,
  },
};

export const getErrorMessageByWeightUnit = (weightUnit: WeightUnit) => {
  return `Please enter a value between ${WEIGHT_RANGE[weightUnit].min} ${weightUnit} and ${WEIGHT_RANGE[weightUnit].max} ${weightUnit}`;
};
