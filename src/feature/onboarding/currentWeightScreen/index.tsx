import { useCallback } from "react";
import SwitchRadioGroup from "../../../uiComponents/switchRadioGroup";
import { useOnboardingWizard } from "../../../context/onboardingWizard/useOnboardingWizard";
import { FIELD_CURRENT_WEIGHT, FIELD_WEIGHT_UNIT, WEIGHT_UNIT_OPTIONS } from "../constants";
import type { OnboardingWizardFields } from "../../../context/onboardingWizard/types";

const CurrentWeightScreen = () => {
  const { goNext, getFieldError, setValue, fields } = useOnboardingWizard();

  const onSubmit = useCallback(
    (e: SubmitEvent) => {
      e.preventDefault();

      if (!getFieldError(FIELD_CURRENT_WEIGHT)) {
        goNext();
      }
    },
    [getFieldError, goNext]
  );

  return (
    <form>
      <SwitchRadioGroup<OnboardingWizardFields>
        value={fields.weightUnit}
        onChange={setValue}
        options={WEIGHT_UNIT_OPTIONS}
        name={FIELD_WEIGHT_UNIT}
      />
    </form>
  );
};

export default CurrentWeightScreen;
