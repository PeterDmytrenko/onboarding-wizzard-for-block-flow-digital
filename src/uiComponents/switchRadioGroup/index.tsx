import { memo } from "react";
import * as S from "./styled";
import type { Option } from "./types";

type Props = {
  options: Array<Option>;
  value: string;
  handleChange: (value: string, key?: string) => void;
  name?: string;
};

const SwitchRadioGroup = ({ options, value, handleChange, name }: Props) => {
  const onChange = (value: string) => {
    if (name) {
      handleChange(value, name);
    } else {
      handleChange(value);
    }
  };

  const activeIndex = options.findIndex((option) => option.value === value);

  return (
    <S.SwitchRadioGroupRoot>
      <S.SwitchRadioGroupThumb
        count={options.length}
        activeIndex={Math.max(activeIndex, 0)}
      />

      {options.map((option) => {
        const isActive = option.value === value;

        return (
          <S.SwitchRadioGroupItemOptionLabel key={option.value}>
            <S.SwitchRadioGroupHiddenItem
              type="radio"
              value={option.value}
              checked={isActive}
              onChange={() => onChange(option.value)}
            />

            <S.SwitchRadioGroupItemLabelText active={isActive}>
              {option.label}
            </S.SwitchRadioGroupItemLabelText>
          </S.SwitchRadioGroupItemOptionLabel>
        );
      })}
    </S.SwitchRadioGroupRoot>
  );
};

export default memo(SwitchRadioGroup) as typeof SwitchRadioGroup;
