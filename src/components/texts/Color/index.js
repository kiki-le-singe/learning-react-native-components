import React, { Component, StyleSheet, Text } from 'react-native';

export default class Color extends Component {
  render() {
    const { color } = this.props;

    return (
      <Text style={{ color }}>{ this.props.children }</Text>
    );
  }
}
