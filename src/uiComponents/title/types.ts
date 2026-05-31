import type { ReactNode } from "react";

export const TitleTag = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
} as const;

export type TitleTagType =
  (typeof TitleTag)[keyof typeof TitleTag];

export type TitleProps = {
  tag: TitleTagType;
  minFontSize: number;
  preferredFontSize: number;
  maxFontSize: number;
  children: ReactNode;
};