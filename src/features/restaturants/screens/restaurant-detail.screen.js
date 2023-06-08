import React from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { SafeArea } from "../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
        >
          <List.Item title="Omlet sa sirom" />
          <List.Item title="Engleski dorucak" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} icon="hamburger" />}
        >
          <List.Item title="Piletina u sosu od gljiva" />
          <List.Item title="Double Burger" />
          <List.Item title="Mac and Cheese" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} icon="food-variant" />}
        >
          <List.Item title="Rolovana teletina" />
          <List.Item title="Gulas" />
          <List.Item title="Teleci medaljoni" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} icon="beer" />}
        >
          <List.Item title="Toceno pivo" />
          <List.Item title="Gazirani sok" />
          <List.Item title="Prirodni sok" />
          <List.Item title="Vino" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
