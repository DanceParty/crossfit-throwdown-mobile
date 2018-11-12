import React from "react";
import { View, Text, StyleSheet, StatusBar, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import Header from "../components/Header";
import Card from "../components/Card";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get("screen");
function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  console.log(Math.round(value));
  return Math.round(value);
}
class Home extends React.Component {
  render() {
    const items = [
      { title: "Men RX" },
      { title: "Women RX" },
      { title: "Men Scaled" },
      { title: "Women Scaled" }
    ];
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Header />
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={items}
          renderItem={({ item, index }) => <Card item={item} />}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={Dimensions.get("window").width - 50}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    backgroundColor: "#1F4287",
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Home;
