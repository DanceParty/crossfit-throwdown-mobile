import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

class MenRx extends React.Component {
  static navigationOptions = {
    title: 'Men - RX',
    headerStyle: {
      backgroundColor: 'hsl(141, 71%, 38%)',
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
        <Text>Hello this is the Men RX Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#23d160',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MenRx