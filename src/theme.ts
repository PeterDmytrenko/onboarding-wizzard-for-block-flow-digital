export const theme = {
  colors: {
    bgColor: "#F1F0F6",
    bgHeader: "#FFFFFF",
    headerBorderColor: "#DAD9E0",
    bgProgressBarFill: "linear-gradient(90deg, #1fa9c7 0%, #1bb97c 100%)",
    mainTextColor: "#141415",
  },
  transitions: {
    default: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  zIndex: {
    header: 1,
  },
  radius: {
    buttonRadius: '1rem',
  }
} as const;

export type Theme = typeof theme;

export type ThemeColor = Theme["colors"][keyof Theme["colors"]];
