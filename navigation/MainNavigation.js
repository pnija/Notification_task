import {  createStackNavigator, createAppContainer } from 'react-navigation';

import BlankPage from '../Screens/NextPage';
import HomePage from '../Screens/HomePage';
 const MainNavigation = createStackNavigator({
    Home: { screen: HomePage },
    Blank: { screen: BlankPage }
},

    /*await AsyncStorage.getItem('Present_user_id') != '') ? {    
        initialRouteName: 'listing',
      } : {initialRouteName: 'auth',}*/
      {
        initialRouteName: 'Home',
        headerMode: 'none',
      },
    
);

export default createAppContainer(MainNavigation);