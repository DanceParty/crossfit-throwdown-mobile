import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Card extends React.Component {
  render() {
    const { item } = this.props;
    const people = [
      {
        position: 1,
        name: "Keevan Dance",
        score: 13
      },
      {
        position: 2,
        name: "Jeehyae Dance",
        score: 14
      },
      {
        position: 3,
        name: "Colby Carr",
        score: 16
      },
      {
        position: 4,
        name: "Bull Burnham",
        score: 22
      },
      {
        position: 5,
        name: "Joey Dressler",
        score: 33
      },
      {
        position: 6,
        name: "Keevan Dance",
        score: 34
      }
    ];
    return (
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.body}>
          {people.map(person => (
            <View key={person.position} style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Text style={styles.contentTitle}>
                  <Text style={styles.position}>{person.position}</Text>
                  {` `}
                  {person.name}
                </Text>
              </View>
              <View style={styles.listItemRight}>
                <Text style={styles.contentTitle}>{person.score}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: "100%",
    flex: 5,
    marginBottom: 20,
    borderRadius: 10
  },
  header: {
    flex: 1,
    alignItems: "center",
    marginTop: 10
  },
  title: {
    fontSize: 32
  },
  body: {
    flex: 4
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    height: 60,
    paddingLeft: 20,
    paddingLeft: 20,
    justifyContent: "space-between",
    alignItems: "center"
  },
  listItemLeft: {
    flex: 3
  },
  listItemRight: {
    flex: 1,
    alignItems: "center"
  },
  contentTitle: {
    fontSize: 18
  },
  position: {
    fontSize: 14,
    fontWeight: "bold"
  }
});

export default Card;
