import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'

class Home extends React.Component {
  static navigationOptions = {
    title: 'CrossFit Yuma Throwdown',
    headerStyle: {
      backgroundColor: '#199444',
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
        <TouchableHighlight
          style={[styles.menuItem, styles.menRxContainer]}
          onPress={() => this.props.navigation.navigate('MenRx')}
          underlayColor="hsl(141, 71%, 38%)"
        >
          <Text style={styles.title}>Men - RX</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.menuItem, styles.womenRxContainer]}
          onPress={() => this.props.navigation.navigate('WomenRx')}
          underlayColor="hsl(171, 100%, 31%)"
        >
          <Text style={styles.title}>Women - RX</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.menuItem, styles.menScaledContainer]}
          onPress={() => this.props.navigation.navigate('MenScaled')}
          underlayColor="hsl(204, 86%, 43%)"
        >
          <Text style={styles.title}>Men - Scaled</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.menuItem, styles.womenScaledContainer]}
          onPress={() => this.props.navigation.navigate('WomenScaled')}
          underlayColor="hsl(217, 71%, 53%)"
        >
          <Text style={styles.title}>Women - Scaled</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItem: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menRxContainer: {
    backgroundColor: 'hsl(141, 71%, 48%)',
  },
  womenRxContainer: {
    backgroundColor: 'hsl(171, 100%, 41%)',
  },
  menScaledContainer: {
    backgroundColor: 'hsl(204, 86%, 53%)',
  },
  womenScaledContainer: {
    backgroundColor: 'hsl(217, 71%, 53%)',
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: 'white',
  }
});

export default Home