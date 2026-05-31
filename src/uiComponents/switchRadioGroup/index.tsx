import { memo } from "react";
import * as S from "./styled";
import type { Option } from "./types";

type Props<T> = {
  options: Array<Option>;
  value: string;
  onChange: (key: keyof T, value: string) => void;
  name: keyof T;
};

const SwitchRadioGroup = <T,>({ options, value, onChange, name }: Props<T>) => {
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
              onChange={() => onChange(name, option.value)}
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
