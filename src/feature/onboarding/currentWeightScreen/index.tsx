import SwitchRadioGroup from "../../../uiComponents/switchRadioGroup";
import { useOnboardingWizard } from "../../../context/onboardingWizard/useOnboardingWizard";
import {
  FIELD_CURRENT_WEIGHT,
  FORM_CURRENT_WEIGHT,
  WEIGHT_UNIT_OPTIONS,
} from "../constants";
import InputWithSuffix from "../../../uiComponents/inputWithSuffix";
import { FormStyled } from "../wishScreen/styled";
import { ExternalInputWrapper } from "../styled";
import { ErrorMessage } from "../../../uiComponents/inputWithSuffix/styled";
import { getErrorMessageByWeightUnit } from "../../../utils/onboarding";
import type { SyntheticEvent } from "react";
import { TitleTag } from "../../../uiComponents/title/types";
import Title from "../../../uiComponents/title";
import HighlightText from "../../../uiComponents/textWithPartlyHightligh";
import { theme } from "../../../theme";

const CurrentWeightScreen = () => {
  const { goNext, setValue, fields, handleWeightUnitChange, errors } =
    useOnboardingWizard();

  const onChangeInput = (value: string) => {
    setValue(FIELD_CURRENT_WEIGHT, value);
  };

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    goNext();
  };

  const errorMessage = getErrorMessageByWeightUnit(fields.weightUnit);

  return (
    <FormStyled id={FORM_CURRENT_WEIGHT} onSubmit={onSubmit}>
      <Title
        tag={TitleTag.H2}
        minFontSize={1.625}
        preferredFontSize={2}
        maxFontSize={2.25}
      >
        <HighlightText
          text="What is your goal weight?"
          highlightText="goal"
          highlightColor={theme.colors.greenAccent}
        />
      </Title>
      <SwitchRadioGroup
        value={fields.weightUnit}
        handleChange={handleWeightUnitChange}
        options={WEIGHT_UNIT_OPTIONS}
      />
      <ExternalInputWrapper>
        <InputWithSuffix
          handleChange={onChangeInput}
          value={fields.currentWeight}
          placeholder="Weight"
          suffix={fields.weightUnit}
          hasError={errors.currentWeight}
        />

        <ErrorMessage hasError={errors.currentWeight}>
          {errorMessage}
        </ErrorMessage>
      </ExternalInputWrapper>
    </FormStyled>
  );
};

export default CurrentWeightScreen;
