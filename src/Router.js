import { createStackNavigator } from 'react-navigation';
import Home from './screens/Home'
import MenRx from './screens/MenRx'
import WomenRx from './screens/WomenRx'
import MenScaled from './screens/MenScaled'
import WomenScaled from './screens/WomenScaled'

export default createStackNavigator({
  Home: {screen: Home},
  MenRx: {screen: MenRx},
  WomenRx: {screen: WomenRx},
  MenScaled: {screen: MenScaled},
  WomenScaled: {screen: WomenScaled},
});