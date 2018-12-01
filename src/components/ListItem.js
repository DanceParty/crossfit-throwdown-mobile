import React from 'react'
import {View, Text} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'

import {$lightgrey} from '../utils/colors'

const ListItem = ({label, primary, secondary}) => (
  <View style={styles.container}>
    <View style={styles.labelContainer}>
      <Text style={styles.label}>{label}</Text>
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.primary} numberOfLines={1}>
        {primary}
      </Text>
      <Text style={styles.secondary}>{secondary}</Text>
    </View>
  </View>
)

const styles = ScaledSheet.create({
  container: {
    padding: '3@ms',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
  },
  labelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    display: 'flex',
    flex: 9,
    justifyContent: 'space-around',
  },
  label: {
    fontSize: '18@ms0.3',
    fontWeight: 'bold',
  },
  primary: {
    fontSize: '24@ms0.3',
  },
  secondary: {
    fontSize: '18@ms0.3',
    fontWeight: 'bold',
    color: $lightgrey,
  },
})

export default ListItem
