import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Details: DetailsScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant search',
    cardStyle: {
      backgroundColor: '#fff'
    }
  }
})

export default createAppContainer(navigator);