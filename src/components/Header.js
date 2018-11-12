import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.subtitle}>CrossFit Yuma</Text>
    <Text style={styles.title}>Throwdown</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    alignItems: "center"
  },
  title: {
    fontSize: 48,
    fontWeight: "800",
    color: "#fff"
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#fff"
  }
});

export default Header;
