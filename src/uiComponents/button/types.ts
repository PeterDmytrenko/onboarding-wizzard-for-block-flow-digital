import type { ComponentProps } from "react";

export type ButtonVariant = "primary";

export type BaseButtonProps = {
  label: string;
  customSize?: string | number;
  variant?: ButtonVariant;
} & ComponentProps<"button">;
