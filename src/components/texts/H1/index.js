import React, { Component, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  h1: {
    fontSize: 32
  },
});

export default class H1 extends Component {
  render() {
    return (
      <Text style={styles.h1}>{ this.props.children }</Text>
    );
  }
}
