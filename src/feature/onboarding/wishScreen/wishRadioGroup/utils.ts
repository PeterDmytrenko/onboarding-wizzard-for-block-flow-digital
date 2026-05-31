import type { OnboardingWizardFields } from "../../../../context/onboardingWizard/types";
import {
  FIELD_CURRENT_WEIGHT,
  FIELD_GOAL_WEIGHT,
  FIELD_SELECTED_WISH,
  FIELD_WEIGHT_UNIT,
} from "../../constants";

export const validators: Record<
  keyof Omit<OnboardingWizardFields, typeof FIELD_WEIGHT_UNIT>,
  (v: string) => boolean | string | null
> = {
  [FIELD_SELECTED_WISH]: (v: string) => (v ? false : true),
  [FIELD_CURRENT_WEIGHT]: (v: string) => {
    return null;
  },
  [FIELD_GOAL_WEIGHT]: (v: string) => {
    return null;
  },
};
