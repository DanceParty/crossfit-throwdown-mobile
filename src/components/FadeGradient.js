import React from 'react'
import {StyleSheet} from 'react-native'
import {LinearGradient} from 'expo'

function FadeGradient({position, colors, height}) {
  return (
    <LinearGradient
      style={styles.container(position, height)}
      colors={colors}
      pointerEvents="none"
    />
  )
}

const styles = StyleSheet.create({
  container: function(position, height = '30%') {
    return {
      position: 'absolute',
      left: 0,
      right: 0,
      [position]: 1,
      height: height,
      zIndex: 10,
    }
  },
})

export default FadeGradient
