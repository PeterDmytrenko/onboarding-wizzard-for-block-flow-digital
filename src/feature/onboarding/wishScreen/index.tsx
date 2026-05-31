import { useCallback, type SubmitEvent } from "react";
import WishRadioGroup from "./wishRadioGroup";
import { useOnboardingWizard } from "../../../context/onboardingWizard/useOnboardingWizard";
import { FIELD_SELECTED_WISH, FORM_WISH } from "../constants";
import Title from "../../../uiComponents/title";
import { TitleTag } from "../../../uiComponents/title/types";
import { FormStyled } from "./styled";

const WishScreen = () => {
  const { goNext, getFieldError, setValue, fields } = useOnboardingWizard();

  const onSubmit = useCallback(
    (e: SubmitEvent) => {
      e.preventDefault();

      if (!getFieldError(FIELD_SELECTED_WISH)) {
        goNext();
      }
    },
    [getFieldError, goNext]
  );

  return (
    <FormStyled id={FORM_WISH} onSubmit={onSubmit}>
      <Title
        tag={TitleTag.H2}
        minFontSize={1.625}
        preferredFontSize={2}
        maxFontSize={2.25}
      >
        What is your main wish?
      </Title>
      <WishRadioGroup setValue={setValue} value={fields[FIELD_SELECTED_WISH]} />
    </FormStyled>
  );
};

export default WishScreen;
