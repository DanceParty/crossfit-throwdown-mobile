import React from 'react'
import {View} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters'

const CardBody = ({children}) => <View style={styles.container}>{children}</View>

const styles = ScaledSheet.create({
  container: {
    flex: 6,
    paddingTop: '15@ms',
    paddingBottom: '15@ms',
    paddingLeft: '5@ms',
    paddingRight: '5@ms',
  },
})

export default CardBody
