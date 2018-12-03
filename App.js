import React from 'react'
// import "./src/utils/dotenv";
import './src/utils/firebase'
import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Leaderboard from './src/screens/Leaderboard'
import Workouts from './src/screens/Workouts'
import {$darkblue, $lightgrey} from './src/utils/colors'

const Router = createBottomTabNavigator(
  {
    Leaderboard: Leaderboard,
    Workouts: Workouts,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state
        let iconName
        if (routeName === 'Leaderboard') {
          iconName = `trophy-award`
        } else if (routeName === 'Workouts') {
          iconName = `dumbbell`
        }

        return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: $darkblue,
      inactiveTintColor: $lightgrey,
    },
  },
)

export default createAppContainer(Router)
