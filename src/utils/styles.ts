import { css } from "@emotion/react";

export const getCustomSize = (size: string | number) =>
  typeof size === "number"
    ? css`
        width: ${size / 16}rem;
        height: ${size / 16}rem;
      `
    : css`
        width: ${size};
        height: ${size};
      `;
