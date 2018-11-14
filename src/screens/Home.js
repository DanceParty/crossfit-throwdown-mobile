import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  ActivityIndicator
} from "react-native";
import Carousel from "react-native-snap-carousel";
import Header from "../components/Header";
import Card from "../components/Card";
import { calculateStandings } from "../utils/scoring";
import { fetchScores, fetchCompetitors, fetchWorkouts } from "../utils/dataHelpers";

class Home extends React.Component {
  state = {
    scores: null,
    workouts: null,
    competitors: null,
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { error: scoresErr, data: scores } = await fetchScores();
    const { error: workoutsErr, data: workouts } = await fetchWorkouts();
    const { error: competitorsErr, data: competitors } = await fetchCompetitors();
    const groupedErrors =
      scoresErr || workoutsErr || competitorsErr
        ? { errors: { scoresErr, workoutsErr, competitorsErr } }
        : null;
    this.setState({ scores, workouts, competitors, error: groupedErrors, isLoading: false });
  };

  render() {
    const { isLoading, error, competitors } = this.state;
    if (isLoading) {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Header />
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      );
    } else if (error) {
      console.log(error);
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Header />
          <Text>Error loading data...</Text>
        </View>
      );
    } else {
      const standings = calculateStandings(this.state.workouts, this.state.scores);
      const items = [
        { title: "Men RX", data: standings(competitors.men.rx) },
        { title: "Women RX", data: standings(competitors.women.rx) },
        { title: "Men Scaled", data: standings(competitors.men.scaled) },
        { title: "Women Scaled", data: standings(competitors.women.scaled) }
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
