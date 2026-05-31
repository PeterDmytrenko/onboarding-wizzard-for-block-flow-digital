import { keyframes } from "@emotion/react";

export const theme = {
  colors: {
    bgColor: "#F1F0F6",
    bgSecondary: "#F8F8FB",
    bgHeader: "#FFFFFF",
    bgProgressBarFill: "linear-gradient(90deg, #1fa9c7 0%, #1bb97c 100%)",
    greenPrimary: "#1BB97C",
    mainTextColor: "#141415",
    textLight: "#FFFFFF",
    borderPrimary: "#F1F0F6",
    borderSecondary: "#DAD9E0",
    primaryLinearGradient: "linear-gradient(90deg, #1fa9c7 0%, #1bb97c 100%)"
  },
  transitions: {
    default: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  zIndex: {
    header: 1,
  },
  radius: {
    xl: "1rem",
    lg: "0.75rem",
  },
} as const;

export const slideInRight = keyframes`
  from {
    transform: translateX(40px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideInLeft = keyframes`
  from {
    transform: translateX(-40px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export type Theme = typeof theme;

export type ThemeColor = Theme["colors"][keyof Theme["colors"]];
