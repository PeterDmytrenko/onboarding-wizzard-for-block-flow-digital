import type { WeightOption, WishOption } from "./types";

export const TOTAL_STEPS = 3;

export const FIELD_SELECTED_WISH = "selectedWish";
export const FIELD_CURRENT_WEIGHT = "currentWeight";
export const FIELD_GOAL_WEIGHT = "goalWeight";
export const FIELD_WEIGHT_UNIT = "weightUnit";

export const LBS_WEIGHT_UNIT = "lbs";
export const KG_WEIGHT_UNIT = "kg";

export const WISH_OPTIONS: Array<WishOption> = [
  { id: "1", emoji: "😔", label: "wish1" },
  { id: "2", emoji: "🥳", label: "wish2" },
  { id: "3", emoji: "⚖️", label: "wish3" },
  { id: "4", emoji: "💚", label: "wish4" },
  { id: "5", emoji: "😊", label: "wish5" },
];

export const WEIGHT_UNIT_OPTIONS: Array<WeightOption> = [
  { label: LBS_WEIGHT_UNIT, value: LBS_WEIGHT_UNIT },
  { label: KG_WEIGHT_UNIT, value: KG_WEIGHT_UNIT },
];

export const FORM_WISH = "wish-form";
export const FORM_CURRENT_WEIGHT = "current-weight-form";
export const FORM_GOAL_WEIGHT = "goal-weight-form";

export const KG_TO_LBS = 2.20462;

export const MIN_KG_WEIGHT = 10;
export const MAX_KG_WEIGHT = 200;
export const MIN_LBS_WEIGHT = 22;
export const MAX_LBS_WEIGHT = 485;

