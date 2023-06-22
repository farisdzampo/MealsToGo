import React, { useContext } from "react";

import { Ionicons } from "@expo/vector-icons";

import { List, Avatar } from "react-native-paper";

import { SafeArea } from "../../restaturants/components/utility/safe-area.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { SettingsItem } from "../../account/components/account.styles";
import { AvatarContainer } from "../../account/components/account.styles";
import { Text } from "react-native";
import { SpacerBotOne } from "../../restaturants/components/restaurant-info-card.styles";
import { SettingsEmailText } from "../../account/components/account.styles";

const heartIcon = () => <Ionicons name="heart" size={24} color="black" />;
const logoutIcon = () => (
  <Ionicons name="log-out-outline" size={24} color="black" />
);
const avatarIcon = () => <Ionicons name="person" size={80} color="white" />;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon
          size={120}
          icon={avatarIcon}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ backgroundColor: "#2182bd" }}
        />
        <SpacerBotOne />

        <SettingsEmailText>{user.email}</SettingsEmailText>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          left={(props) => (
            <List.Icon {...props} color="black" icon={heartIcon} />
          )}
          onPress={() => navigation.navigate("FavoritesScreen")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => (
            <List.Icon {...props} color="black" icon={logoutIcon} />
          )}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
