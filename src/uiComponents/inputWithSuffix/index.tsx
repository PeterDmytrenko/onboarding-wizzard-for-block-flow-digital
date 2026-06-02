import { type ChangeEvent, memo, useRef } from "react";
import * as S from "./styled";

type Props = {
  value: string;
  handleChange: (value: string) => void;
  placeholder: string;
  suffix: string;
  hasError: boolean;
};

export const InputWithSuffix = (props: Props) => {
  const { suffix, placeholder, value, handleChange, hasError } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(",", ".");

    if (!/^(\d{1,3}(\.\d{0,1})?)?$/.test(val)) return;

    handleChange(val);
  };

  const onBlur = () => {
    handleChange(value.replace(/^0$|^0+(?=\d)|[.,]$/g, ""));
  };

  const hiddenMeasurerText = value
    ? `${value} ${suffix}`
    : `${placeholder} ${suffix}`;

  return (
    <S.InputWithSuffixRoot onClick={handleContainerClick}>
      <S.InputWithMeasurerWrapper>
        <S.HiddenMeasurer>{hiddenMeasurerText}</S.HiddenMeasurer>
        <S.InputWithSuffixWrapper>
          <S.StyledInput
            ref={inputRef}
            type="text"
            inputMode="decimal"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
          />
          <S.SuffixText>{suffix}</S.SuffixText>
        </S.InputWithSuffixWrapper>
      </S.InputWithMeasurerWrapper>

      <S.Underline hasError={hasError} />
    </S.InputWithSuffixRoot>
  );
};

export default memo(InputWithSuffix);
