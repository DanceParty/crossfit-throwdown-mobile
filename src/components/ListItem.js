import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListItem = ({ label, primary, secondary }) => (
  <View style={styles.container}>
    <View style={styles.labelContainer}>
      <Text style={styles.label}>{label}</Text>
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.primary}>{primary}</Text>
      <Text style={styles.secondary}>{secondary}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    margin: 5
  },
  labelContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  contentContainer: {
    display: "flex",
    flex: 9,
    justifyContent: "space-around"
  },
  label: {
    fontSize: 18,
    fontWeight: "bold"
  },
  primary: {
    fontSize: 24
  },
  secondary: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#C4C4C4"
  }
});

export default ListItem;
