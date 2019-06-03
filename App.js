

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View, Button} from 'react-native';
// import {setupPushNotification} from "./Screens/pushnotificationscreen"
// var PushNotification = require('react-native-push-notification');


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });



// export default class App extends Component{
//   _handleNotificationOpen = () => {
//     const {navigate} = this.props.navigation
//     navigate("NextPage")
//   }
//   componentDidMount() {
//     this.pushNotification = setupPushNotification(this._handleNotificationOpen)
//   }

//   _handlePress = () => {
//     this.pushNotification.localNotificationSchedule({
//       message: 'Some message',
//       date: new Date(Date.now() + (10 * 1000)), 
//     })

//   }
//   onPress = () => {
//     PushNotification.localNotification({
//       title: "My Notification Title", 
//       message: "My Notification Message", 
//   });
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//         <Button title="Notify" onPress={this._handlePress}></Button>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import {createAppContainer} from 'react-navigation';
import AppConta from './navigation/MainNavigation';
const MainNavigation = createAppContainer(AppConta)
export default class App extends React.Component {

// when the app is closed, remove the event listener

  render() {
    return (
      <View style={styles.container}>
        <MainNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});