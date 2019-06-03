

import React, {Component} from 'react';
import {StyleSheet,View, Button} from 'react-native';
import {setupPushNotification} from "./pushnotificationscreen"


export default class HomePage extends Component{
  _handleNotificationOpen = () => {
    const {navigate} = this.props.navigation
    navigate("Blank")
  }
  componentDidMount() {
    this.pushNotification = setupPushNotification(this._handleNotificationOpen)
  }

  _handlePress = () => {
    this.pushNotification.localNotificationSchedule({
      message: 'Some message',
      date: new Date(Date.now() + (10 * 1000)), 
    })

  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="Notify" onPress={this._handlePress}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
