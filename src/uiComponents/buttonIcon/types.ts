import type { ComponentProps, SVGProps } from "react";

export type ButtonVariant = "transparentLight";

export type BaseButtonIconProps = {
  Icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  customSize?: string | number;
  customIconSize?: string | number;
  variant?: ButtonVariant;
} & ComponentProps<"button">;