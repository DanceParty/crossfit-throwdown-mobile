import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

class WomenScaled extends React.Component {
  static navigationOptions = {
    title: 'Women - Scaled',
    headerStyle: {
      backgroundColor: 'hsl(217, 71%, 43%)',
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
        <Text>Hello this is the Women Scaled Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'hsl(217, 71%, 53%)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WomenScaled