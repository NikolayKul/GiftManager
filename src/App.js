import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import NamedTextView from './components/NamedTextView'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NamedTextView name="Hulio Eglesias" />
        <NamedTextView name="Mary" />
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
