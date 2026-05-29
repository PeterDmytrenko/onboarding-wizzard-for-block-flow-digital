import { Outlet } from "react-router";
import { AppContainer, OnboardingMain } from "./coreStyled";

const OnboardingLayout = () => {
  return (
    <AppContainer>
      <OnboardingMain className="main-content">
        <Outlet />
      </OnboardingMain>
    </AppContainer>
  );
};

export default OnboardingLayout;
