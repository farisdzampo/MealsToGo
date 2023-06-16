import React from "react";

import {
  AccountBackground,
  AccountContainer,
  AuthButton,
} from "../components/account.styles";

import { SpacerBotOne } from "../../restaturants/components/restaurant-info-card.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <SpacerBotOne />
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
