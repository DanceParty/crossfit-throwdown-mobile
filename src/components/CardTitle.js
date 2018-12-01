import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
import {$lightgrey} from '../utils/colors'

const CardTitle = ({children}) => (
  <View style={styles.container}>
    <View style={styles.shortWidth}>
      <Text numberOfLines={1} style={styles.title}>
        {children}
      </Text>
    </View>
  </View>
)

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shortWidth: {
    flex: 1,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: $lightgrey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontSize: '40@ms0.2',
    fontWeight: 'bold',
  },
})

export default CardTitle
