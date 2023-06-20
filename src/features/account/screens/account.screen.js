import React from "react";

import { Ionicons } from "@expo/vector-icons";

import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  AccountTitle,
} from "../components/account.styles";

import { SpacerBotOne } from "../../restaturants/components/restaurant-info-card.styles";

const lockIcon = () => (
  <Ionicons name="lock-open-outline" size={24} color="white" />
);
const emailIcon = () => <Ionicons name="md-mail" size={24} color="white" />;

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountTitle>Meals To Go</AccountTitle>
      <AccountContainer>
        <AuthButton
          icon={lockIcon}
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <SpacerBotOne />
        <AuthButton
          icon={emailIcon}
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
