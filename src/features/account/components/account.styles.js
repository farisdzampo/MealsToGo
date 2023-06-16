import styled from "styled-components/native";

import { Button } from "react-native-paper";

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
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})``;