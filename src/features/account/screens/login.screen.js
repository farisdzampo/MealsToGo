import React, { useState, useContext } from "react";
import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  AuthInput,
} from "../components/account.styles";

import { SpacerBotOne } from "../../restaturants/components/restaurant-info-card.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          underlineColor="transparent"
          onChangeText={(e) => setEmail(e)}
        />
        <SpacerBotOne />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          secure
          underlineColor="transparent"
          onChangeText={(p) => setPassword(p)}
        />
        <SpacerBotOne />
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => onLogin()}
        >
          Login
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
