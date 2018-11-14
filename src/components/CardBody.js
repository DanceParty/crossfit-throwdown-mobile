import React from "react";
import { View, StyleSheet } from "react-native";

const CardBody = ({ children }) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create({
  container: {
    flex: 6,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default CardBody;
