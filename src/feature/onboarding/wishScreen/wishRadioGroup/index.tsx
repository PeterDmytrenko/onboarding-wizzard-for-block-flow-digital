import { memo } from "react";
import * as S from "./styled.tsx";
import WishRadioButton from "./WishRadioButton.tsx";
import type { OnboardingWizardFields } from "../../../../context/onboardingWizard/types.ts";
import { FIELD_SELECTED_WISH, WISH_OPTIONS } from "../../constants.ts";

type Props = {
  value: string;
  setValue: (key: keyof OnboardingWizardFields, value: string) => void;
  name?: string;
};

const WishRadioGroup = ({ value, setValue, name }: Props) => {
  const onChangeRadioGroup = (id: string) => {
    setValue(FIELD_SELECTED_WISH, id);
  };

  return (
    <S.WishRadioGroupRoot>
      {WISH_OPTIONS.map((option) => {
        const isChecked = value === option.id;

        return (
          <WishRadioButton
            key={option.id}
            optionData={option}
            isChecked={isChecked}
            onChangeRadioGroup={onChangeRadioGroup}
            name={name}
          />
        );
      })}
    </S.WishRadioGroupRoot>
  );
};

export default memo(WishRadioGroup);
