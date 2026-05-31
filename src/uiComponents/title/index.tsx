import type { TitleProps } from "./types";
import { StyledTitle } from "./styled";

const Title = (props: TitleProps) => {
  const { tag, children, minFontSize, preferredFontSize, maxFontSize } = props;

  return (
    <StyledTitle
      as={tag}
      minFontSize={minFontSize}
      preferredFontSize={preferredFontSize}
      maxFontSize={maxFontSize}
    >
      {children}
    </StyledTitle>
  );
};

export default Title;
