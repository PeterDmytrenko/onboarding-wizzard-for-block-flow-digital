import styled from "@emotion/styled";
import type { ThemeColor } from "../../theme";

export const HighlightPart = styled.span<{ highlightColor: ThemeColor }>`
  color: ${({ highlightColor }) => highlightColor};
`;
