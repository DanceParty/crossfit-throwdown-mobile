import React from 'react'
import {
  Text,
  View,
  StatusBar,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  RefreshControl,
} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
import Carousel from 'react-native-snap-carousel'
import Card from '../components/Card'
import Header from '../components/Header'
import FadeGradient from '../components/FadeGradient'
import {fetchWorkouts} from '../utils/dataHelpers'
import {$darkblue, $white, $lightgrey, $invisible} from '../utils/colors'
import {text} from '../utils/text'

class Workouts extends React.Component {
  state = {
    workouts: null,
    isLoading: true,
    error: null,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const {error, data: workouts} = await fetchWorkouts()
    this.setState({workouts, error, isLoading: false})
  }

  reloadData = async () => {
    this.setState({isReloading: true})
    await this.fetchData()
    this.setState({isReloading: false})
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Header />
          <ActivityIndicator size="large" color={$white} />
        </View>
      )
    } else if (this.state.error) {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Header />
          <Text>{text.errors.workouts}</Text>
        </View>
      )
    } else {
      const items = this.state.workouts.map(workout => ({
        title: workout.name,
        workout,
      }))
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
                  refreshControl={
                    <RefreshControl
                      refreshing={this.state.isReloading}
                      onRefresh={this.reloadData}
                    />
                  }
                >
                  <Text style={styles.type}>{item.workout.type}</Text>
                  <Text style={styles.standards}>{item.workout.standards}</Text>
                  <View style={styles.workoutContainer}>
                    <Text style={styles.stepTitle}>{text.workouts.rx}</Text>
                    {item.workout.rx.map(step => (
                      <Text style={styles.step}>{step}</Text>
                    ))}
                  </View>
                  <View style={styles.workoutContainer}>
                    <Text style={styles.stepTitle}>{text.workouts.scaled}</Text>
                    {item.workout.scaled.map(step => (
                      <Text style={styles.step}>{step}</Text>
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
  workoutContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '50@ms',
    paddingBottom: '50@ms',
    alignItems: 'center',
  },
  halfContainer: {
    flex: 1,
    alignItems: 'center',
  },
  type: {
    fontSize: '24@ms0.3',
    fontWeight: '500',
    marginVertical: 5,
    textAlign: 'center',
  },
  standards: {
    fontSize: '14@ms0.3',
    marginHorizontal: 3,
    textAlign: 'center',
  },
  stepTitle: {
    fontSize: '18@ms0.3',
    fontWeight: '500',
    marginBottom: 5,
  },
  step: {
    fontSize: '14@ms0.3',
    fontWeight: '400',
    marginVertical: 5,
  },
})

export default Workouts
