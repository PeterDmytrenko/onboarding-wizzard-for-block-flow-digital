import { memo } from "react";
import { HighlightPart } from "./styled";
import type { ThemeColor } from "../../theme";

type HighlightTextProps = {
  text: string;
  highlightText: string;
  highlightColor: ThemeColor;
};

const HighlightText = (props: HighlightTextProps) => {
  const { text, highlightText, highlightColor } = props;

  if (!highlightText) {
    return <>{text}</>;
  }

  const parts = text.split(new RegExp(`(${highlightText})`, "gi"));

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === highlightText.toLowerCase() ? (
          <HighlightPart key={index} highlightColor={highlightColor}>
            {part}
          </HighlightPart>
        ) : (
          part
        )
      )}
    </>
  );
};

export default memo(HighlightText);
