import styled from "@emotion/styled";
import { theme } from "../../../theme";

export const InfoBlock = styled.div`
  background: ${theme.colors.bgWhite};
  border: 1px solid ${theme.colors.borderSecondary};
  border-radius: ${theme.radius.lg};
  width: 100%;
  max-width: 36rem;
  margin: 0 auto;
  padding: 1.25rem 1rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const InfoBlockTitle = styled.p`
  align-items: center;
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  gap: 0.5rem;
  justify-content: center;
  line-height: 1.25;
  color: ${theme.colors.mainTextColor};
`;

export const InfoBlockDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.25;
  font-weight: 300;
  text-align: center;
  color: ${theme.colors.neutralSecondary};
`;
