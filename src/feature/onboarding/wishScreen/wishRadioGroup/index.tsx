import { memo } from "react";
import * as S from "./styled.tsx";
import { OPTIONS } from "./utils.ts";
import WishRadioButton from "./WishRadioButton.tsx";
import type { OnboardingWizardFields } from "../../../../context/onboardingWizard/types.ts";
import { FIELD_SELECTED_WISH } from "../../constants.ts";

type Props = {
  value: string;
  setValue: (key: keyof OnboardingWizardFields, value: string) => void;
};

const WishRadioGroup = ({ value, setValue }: Props) => {
  const onChangeRadioGroup = (id: string) => {
    setValue(FIELD_SELECTED_WISH, id);
  };

  return (
    <S.WishRadioGroupRoot>
      {OPTIONS.map((option) => {
        const isChecked = value === option.id;

        return (
          <WishRadioButton
            key={option.id}
            optionData={option}
            isChecked={isChecked}
            onChangeRadioGroup={onChangeRadioGroup}
          />
        );
      })}
    </S.WishRadioGroupRoot>
  );
};

export default memo(WishRadioGroup);
