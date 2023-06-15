import React from "react";
import { Text } from "react-native";
import { SafeArea } from "../../features/restaturants/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MapScreen } from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Restaurants") {
            iconName = focused ? "restaurant" : "restaurant-outline";
          } else if (route.name === "Map") {
            iconName = focused ? "navigate" : "navigate-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Restaurants"
        component={RestaurantsNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
