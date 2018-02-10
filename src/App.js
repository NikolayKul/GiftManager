import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import HelloWorld from './components/HelloWorld'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HelloWorld />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
