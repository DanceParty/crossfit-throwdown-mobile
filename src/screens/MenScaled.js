import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

class MenScaled extends React.Component {
  static navigationOptions = {
    title: 'Men - Scaled',
    headerStyle: {
      backgroundColor: 'hsl(204, 86%, 43%)',
      borderBottomWidth: 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello this is the Men Scaled Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'hsl(204, 86%, 53%)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MenScaled