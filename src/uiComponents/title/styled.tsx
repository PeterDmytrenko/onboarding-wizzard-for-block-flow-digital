import styled from "@emotion/styled";
import type { TitleProps } from "./types";

export const StyledTitle = styled.p<Omit<TitleProps, "tag" | "children">>`
  font-size: ${({ minFontSize, preferredFontSize, maxFontSize }) =>
    `clamp(${minFontSize}rem, ${preferredFontSize}vw, ${maxFontSize}rem)`};
  font-weight: 400;
  text-align: center;
`;
