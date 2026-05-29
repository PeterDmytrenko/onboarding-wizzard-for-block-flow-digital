import { memo, type ComponentProps, type SVGProps } from "react";
import { BUTTON_ICON_COMPONENT } from "./buttonIconComponents";
import type { ButtonVariant } from "./types";

type BaseProps = {
  Icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  customSize?: string | number;
  customIconSize?: string | number;
  variant?: ButtonVariant;
} & ComponentProps<"button">;

export type ButtonIconBaseProps = BaseProps;

const ButtonIcon: React.FC<ButtonIconBaseProps> = (props) => {
  const {
    Icon,
    variant = "transparentLight",
    customSize = "3rem",
    customIconSize = "1.75rem",
    ...restProps
  } = props;

  const ButtonIconComponent = BUTTON_ICON_COMPONENT[variant];

  return (
    <ButtonIconComponent
      customSize={customSize}
      customIconSize={customIconSize}
      {...restProps}
    >
      <Icon />
    </ButtonIconComponent>
  );
};

export default memo(ButtonIcon);
