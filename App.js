import { createStackNavigator,createSwitchNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator, navigationOption} from 'react-navigation';
import Main from './Main';
import Header from './Header';
import Other from './Other';
// import { Tabs, Header } from 'native-base';
// import Main from './Login';
import Login from './Login';

const RootStack = createStackNavigator({
  Home: { screen: Main },
  Tool: { screen: Other }
});

const RootTab = createBottomTabNavigator({
  Home: { screen: Main },
  Select: { screen: Other },
  Stacks : {screen: RootStack}
});

const RootDrawer = createDrawerNavigator({
  Stacks:{
    // Home: { screen: Main },
    // Select: { screen: Other },
    // Stacks : {screen: RootStack},
    screen: RootStack,
    // navigationOptions
},
Tabs: {
  screen: RootTab,
},
Header: {screen: Header},
Logout: {screen: Login}
});

const RootSwitch=createSwitchNavigator({
  Login:{screen : Header},
  App:{screen : RootDrawer},
});


const App = createAppContainer(RootSwitch)
export default App;