import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CardTitle = ({ children }) => (
  <View style={styles.container}>
    <View style={styles.shortWidth}>
      <Text style={styles.title}>{children}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  shortWidth: {
    flex: 1,
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  title: {
    fontSize: 40,
    fontWeight: "bold"
  }
});

export default CardTitle;
