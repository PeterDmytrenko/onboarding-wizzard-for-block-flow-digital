import type { SyntheticEvent } from "react";
import { useOnboardingWizard } from "../../../context/onboardingWizard/useOnboardingWizard";
import {
  FIELD_GOAL_WEIGHT,
  FORM_GOAL_WEIGHT,
  WEIGHT_UNIT_OPTIONS,
} from "../constants";
import {
  getErrorMessageByWeightUnit,
  getWeightMessage,
} from "../../../utils/onboarding";
import { FormStyled } from "../wishScreen/styled";
import Title from "../../../uiComponents/title";
import { TitleTag } from "../../../uiComponents/title/types";
import HighlightText from "../../../uiComponents/textWithPartlyHightligh";
import { theme } from "../../../theme";
import SwitchRadioGroup from "../../../uiComponents/switchRadioGroup";
import { ExternalInputWrapper } from "../styled";
import InputWithSuffix from "../../../uiComponents/inputWithSuffix";
import { ErrorMessage } from "../../../uiComponents/inputWithSuffix/styled";
import * as S from "./styled";
import Scale from "../../../assets/icons/scale.svg?react";
import { IconWrapper } from "../../../coreComponents/coreStyled";

const GoalWeightScreen = () => {
  const { goNext, setValue, fields, handleWeightUnitChange, errors } =
    useOnboardingWizard();

  const onChangeInput = (value: string) => {
    setValue(FIELD_GOAL_WEIGHT, value);
  };

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    goNext();
  };

  const errorMessage = getErrorMessageByWeightUnit(fields.weightUnit);

  const weightMessage = getWeightMessage(
    fields.currentWeight,
    fields.goalWeight
  );

  return (
    <>
      <FormStyled id={FORM_GOAL_WEIGHT} onSubmit={onSubmit}>
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
            value={fields.goalWeight}
            placeholder="Weight"
            suffix={fields.weightUnit}
            hasError={errors.goalWeight}
          />

          <ErrorMessage hasError={errors.goalWeight}>
            {errorMessage}
          </ErrorMessage>
        </ExternalInputWrapper>
      </FormStyled>

      {fields.goalWeight && !errors.goalWeight && (
        <S.InfoBlock>
          <S.InfoBlockTitle>
            <IconWrapper>
              <Scale />
            </IconWrapper>
            {weightMessage}
          </S.InfoBlockTitle>
          <S.InfoBlockDescription>
            Even small, steady changes can make a meaningful difference. We’ll
            support you with a balanced plan to help you feel lighter,
            healthier, and more confident over time.
          </S.InfoBlockDescription>
        </S.InfoBlock>
      )}
    </>
  );
};

export default GoalWeightScreen;
