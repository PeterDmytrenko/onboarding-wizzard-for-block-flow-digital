import { memo } from "react";
import { BUTTON_ICON_COMPONENT } from "./buttonIconComponents";
import type { BaseButtonIconProps } from "./types";

const ButtonIcon = (props: BaseButtonIconProps) => {
  const {
    Icon,
    variant = "transparentLight",
    customSize = "3rem",
    ...restProps
  } = props;

  const ButtonIconComponent = BUTTON_ICON_COMPONENT[variant];

  return (
    <ButtonIconComponent
      customSize={customSize}
      {...restProps}
    >
      <Icon />
    </ButtonIconComponent>
  );
};

export default memo(ButtonIcon);
