import { createContext } from "react";
import type { OnboardingWizardContextValue } from "./types";

const OnboardingWizardContext =
  createContext<OnboardingWizardContextValue | null>(null);

export default OnboardingWizardContext