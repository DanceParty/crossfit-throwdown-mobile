import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";
import ListItem from "./ListItem";

class Card extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.card}>
        <CardTitle>{item.title}</CardTitle>
        <CardBody>
          <ScrollView>
            {item.data.map(competitor => (
              <ListItem
                key={competitor.id}
                label={competitor.standing}
                primary={`${competitor.firstName} ${competitor.lastName}`}
                secondary={competitor.affiliate}
              />
            ))}
          </ScrollView>
        </CardBody>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: "100%",
    flex: 5,
    padding: 5,
    borderRadius: 10
  }
});

export default Card;
