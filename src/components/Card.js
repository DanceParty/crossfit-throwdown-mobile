import React from 'react'
import {View, Text, ScrollView, Dimensions} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
import CardTitle from './CardTitle'
import CardBody from './CardBody'
import ListItem from './ListItem'
import {$white} from '../utils/colors'

const Card = ({title, children}) => (
  <View style={styles.card}>
    <CardTitle>{title}</CardTitle>
    <CardBody>{children}</CardBody>
  </View>
)

const styles = ScaledSheet.create({
  card: {
    backgroundColor: $white,
    width: '100%',
    padding: '2@ms',
    borderRadius: 10,
    flex: 0.95,
  },
})

export default Card
