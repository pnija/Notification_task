import {  createStackNavigator, createAppContainer } from 'react-navigation';

import BlankPage from '../Screens/NextPage';
import HomePage from '../Screens/HomePage';
 const MainNavigation = createStackNavigator({
    Home: { screen: HomePage },
    Blank: { screen: BlankPage }
},
      {
        initialRouteName: 'Home',
        headerMode: 'none',
      },
    
);

export default createAppContainer(MainNavigation);