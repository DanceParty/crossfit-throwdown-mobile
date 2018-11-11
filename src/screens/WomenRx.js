import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

class WomenRx extends React.Component {
  static navigationOptions = {
    title: 'Women - RX',
    headerStyle: {
      backgroundColor: 'hsl(171, 100%, 31%)',
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
        <Text>Hello this is the Women RX Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'hsl(171, 100%, 41%)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WomenRx