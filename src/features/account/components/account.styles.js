import styled from "styled-components/native";

import { Button, TextInput } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/appBG.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  border-radius: 24px;
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  border-radius: 10px;
`;

export const AuthInput = styled(TextInput)`
  width: 250px;
  border-radius: 10px;
`;
