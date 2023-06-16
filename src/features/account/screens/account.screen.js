import React from "react";

import {
  AccountBackground,
  AccountContainer,
  AuthButton,
} from "../components/account.styles";

import { SpacerBotOne } from "../../restaturants/components/restaurant-info-card.styles";

export const AccountScreen = () => {
  return (
    <AccountBackground>
      <AccountContainer>
        <AuthButton icon="lock-open-outline" mode="contained">
          Login
        </AuthButton>
        <SpacerBotOne />
        <AuthButton icon="lock-open-outline" mode="contained">
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
