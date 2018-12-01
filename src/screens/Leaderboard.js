import React from 'react'
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native'
import {LinearGradient} from 'expo'
import {ScaledSheet} from 'react-native-size-matters'
import Carousel from 'react-native-snap-carousel'
import Header from '../components/Header'
import Card from '../components/Card'
import ListItem from '../components/ListItem'
import {calculateStandings} from '../utils/scoring'
import {fetchScores, fetchCompetitors, fetchWorkouts} from '../utils/dataHelpers'
import {$darkblue, $white, $invisible} from '../utils/colors'
import {text} from '../utils/text'
import FadeGradient from '../components/FadeGradient'

class Leaderboard extends React.Component {
  state = {
    scores: null,
    workouts: null,
    competitors: null,
    isLoading: true,
    isReloading: false,
    error: null,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const {error: scoresErr, data: scores} = await fetchScores()
    const {error: workoutsErr, data: workouts} = await fetchWorkouts()
    const {error: competitorsErr, data: competitors} = await fetchCompetitors()
    const groupedErrors =
      scoresErr || workoutsErr || competitorsErr
        ? {errors: {scoresErr, workoutsErr, competitorsErr}}
        : null
    this.setState({scores, workouts, competitors, error: groupedErrors, isLoading: false})
  }

  reloadData = async () => {
    this.setState({isReloading: true})
    await this.fetchData()
    this.setState({isReloading: false})
  }

  render() {
    const {isLoading, isReloading, error, competitors} = this.state
    if (isLoading) {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Header />
          <ActivityIndicator size="large" color={$white} />
        </View>
      )
    } else if (error) {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Header />
          <Text>{text.errors.leaderboard}</Text>
        </View>
      )
    } else {
      const standings = calculateStandings(this.state.workouts, this.state.scores)
      const items = [
        {title: text.leaderboard.menRx, data: standings(competitors.men.rx)},
        {title: text.leaderboard.womenRx, data: standings(competitors.women.rx)},
        {title: text.leaderboard.menScaled, data: standings(competitors.men.scaled)},
        {title: text.leaderboard.womenScaled, data: standings(competitors.women.scaled)},
      ]
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Header />
          <Carousel
            ref={c => {
              this._carousel = c
            }}
            data={items}
            renderItem={({item, index}) => (
              <Card title={item.title}>
                <FadeGradient colors={[$white, $white, $invisible]} position="top" height="8%" />
                <ScrollView
                  style={styles.scrollView}
                  refreshControl={
                    <RefreshControl refreshing={isReloading} onRefresh={this.reloadData} />
                  }
                >
                  <View style={styles.listContainer}>
                    {item.data.map(competitor => (
                      <ListItem
                        key={competitor.id}
                        label={competitor.standing}
                        primary={`${competitor.firstName} ${competitor.lastName}`}
                        secondary={competitor.affiliate || 'Unaffiliated'}
                      />
                    ))}
                  </View>
                </ScrollView>
                <FadeGradient colors={[$invisible, $white]} position="bottom" />
              </Card>
            )}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width - 50}
          />
        </View>
      )
    }
  }
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: $darkblue,
    paddingTop: '50@ms',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: $white,
    paddingBottom: '50@ms',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '50@ms',
  },
})

export default Leaderboard
