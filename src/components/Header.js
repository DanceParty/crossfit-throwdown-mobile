import React from 'react'
import {View, Text} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'
import {$white} from '../utils/colors'
import {text} from '../utils/text'

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.subtitle}>{text.header.subtitle}</Text>
    <Text style={styles.title}>{text.header.title}</Text>
  </View>
)

const styles = ScaledSheet.create({
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: '48@ms0.3',
    fontWeight: '800',
    color: $white,
  },
  subtitle: {
    fontSize: '24@ms0.3',
    fontWeight: '800',
    color: $white,
  },
})

export default Header
