import type { WeightUnit } from "../../context/onboardingWizard/types";

export type WishOption = {
  id: string;
  emoji: string;
  label: string;
}

export type WeightOption = {
  label: WeightUnit
  value: WeightUnit
}

export type AnimationStepsState = "forward" | "backward"