import { useEffect, useState } from "react";
import ProgressCircle from "../../../uiComponents/progressCircle";
import { CIRCLE_PROGRESS_CONFIG } from "../constants";
import * as S from "./styled";
import Button from "../../../uiComponents/button";
import { useOnboardingWizard } from "../../../context/onboardingWizard/useOnboardingWizard";

const ResultScreen = () => {
  const { reset } = useOnboardingWizard();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        const increment = Math.floor(Math.random() * 3) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const isProgressDone = progress === 100;

  return (
    <S.SimulatedProgressRoot>
      <ProgressCircle value={progress} config={CIRCLE_PROGRESS_CONFIG} />

      <S.SimulatedProgressTextBlock>
        <S.SimulatedProgressMainInfo>
          {isProgressDone
            ? "Process completed!"
            : "Creating something good for you…"}
        </S.SimulatedProgressMainInfo>
        {!isProgressDone && (
          <S.SimulatedProgressDescription>
            This will only take a moment — your item is almost ready.
          </S.SimulatedProgressDescription>
        )}
      </S.SimulatedProgressTextBlock>

      {isProgressDone && (
        <S.ButtonWrapper>
          <Button label="Reset and Start Over" onClick={reset} />
        </S.ButtonWrapper>
      )}
    </S.SimulatedProgressRoot>
  );
};

export default ResultScreen;
