import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

export default class NamedTextView extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    return (
      <Text>Hello, {this.props.name}!</Text>
    )
  }
}
