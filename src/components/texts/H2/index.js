import React, { Component, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  h2: {
    fontSize: 24
  },
});

export default class H2 extends Component {
  render() {
    return (
      <Text style={styles.h2}>{ this.props.children }</Text>
    );
  }
}
