import { memo } from "react";
import { BUTTON_COMPONENT } from "./buttonComponents";
import type { BaseButtonProps } from "./types";

const Button: React.FC<BaseButtonProps> = (props) => {
  const {
    label,
    variant = "primary",
    customSize,
    ...restProps
  } = props;

  const ButtonComponent = BUTTON_COMPONENT[variant];

  return (
    <ButtonComponent
      customSize={customSize}
      {...restProps}
    >
      {label}
    </ButtonComponent>
  );
};

export default memo(Button);
