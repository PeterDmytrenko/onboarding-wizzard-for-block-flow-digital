import { memo, useCallback, type ChangeEvent } from "react";
import * as S from "./styled";
import type { WishOption } from "../../types";

type Props = {
  optionData: WishOption;
  isChecked: boolean;
  onChangeRadioGroup: (id: string) => void;
};

const WishRadioButton = (props: Props) => {
  const {
    optionData: { id, emoji, label },
    isChecked,
    onChangeRadioGroup,
  } = props;

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChangeRadioGroup(e.target.value);
    },
    [onChangeRadioGroup]
  );

  return (
    <S.WishRadioButtonLabel isSelected={isChecked}>
      <S.HiddenRadio
        type="radio"
        name="main-wish"
        value={id}
        checked={isChecked}
        onChange={onChange}
      />
      <S.EmojiWrapper>{emoji}</S.EmojiWrapper>
      <S.OptionText>{label}</S.OptionText>
    </S.WishRadioButtonLabel>
  );
};

export default memo(WishRadioButton);
