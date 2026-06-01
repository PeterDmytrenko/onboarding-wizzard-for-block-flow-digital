import { keyframes } from "@emotion/react";

export const theme = {
  colors: {
    bgColor: "#F1F0F6",
    bgSecondary: "#F8F8FB",
    bgWhite: "#FFFFFF",
    bgProgressBarFill: "linear-gradient(90deg, #1fa9c7 0%, #1bb97c 100%)",
    greenPrimary: "#1BB97C",
    greenAccent: "#099678",
    mainTextColor: "#141415",
    textLight: "#FFFFFF",
    borderPrimary: "#F1F0F6",
    borderSecondary: "#DAD9E0",
    primaryLinearGradient: "linear-gradient(90deg, #1fa9c7 0%, #1bb97c 100%)",
    neutralSecondary: "#555557",
    neutralTertiary: "#82818C",
    criticalPrimary: "#E42D0D",
    criticalPressed: "#FF4A2A",
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
    sm: "0.375rem",
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
