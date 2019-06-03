
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