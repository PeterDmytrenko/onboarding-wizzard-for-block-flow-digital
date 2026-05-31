import type { OnboardingWizardFields } from "../../../../context/onboardingWizard/types";
import {
  FIELD_CURRENT_WEIGHT,
  FIELD_GOAL_WEIGHT,
  FIELD_SELECTED_WISH,
} from "../../constants";
import type { WishOption } from "../../types";

export const OPTIONS: WishOption[] = [
  { id: "1", emoji: "😔", label: "wish1" },
  { id: "2", emoji: "🥳", label: "wish2" },
  { id: "3", emoji: "⚖️", label: "wish3" },
  { id: "4", emoji: "💚", label: "wish4" },
  { id: "5", emoji: "😊", label: "wish5" },
];

export const validators: Record<
  keyof OnboardingWizardFields,
  (v: string) => boolean | string | null
> = {
  [FIELD_SELECTED_WISH]: (v: string) => Boolean(v),
  [FIELD_CURRENT_WEIGHT]: (v: string) => {
    return null;
  },
  [FIELD_GOAL_WEIGHT]: (v: string) => {
    return null;
  },
};
