import type { WishOption } from "./types";
import type { Option } from "../../uiComponents/switchRadioGroup/types";

export const TOTAL_STEPS = 3;

export const FIELD_SELECTED_WISH = "selectedWish";
export const FIELD_CURRENT_WEIGHT = "currentWeight";
export const FIELD_GOAL_WEIGHT = "goalWeight";
export const FIELD_WEIGHT_UNIT = "weightUnit";

export const WISH_OPTIONS: Array<WishOption> = [
  { id: "1", emoji: "😔", label: "wish1" },
  { id: "2", emoji: "🥳", label: "wish2" },
  { id: "3", emoji: "⚖️", label: "wish3" },
  { id: "4", emoji: "💚", label: "wish4" },
  { id: "5", emoji: "😊", label: "wish5" },
];

export const WEIGHT_UNIT_OPTIONS: Array<Option> = [
  { label: "lbs", value: "lbs" },
  { label: "kg", value: "kg" },
];

export const FORM_WISH = "wish-form";
export const FORM_CURRENT_WEIGHT = "current-weight-form";
