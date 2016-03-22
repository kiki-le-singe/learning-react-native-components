import React, { Component, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  h3: {
    fontSize: 18.72
  },
});

export default class H3 extends Component {
  render() {
    return (
      <Text style={styles.h3}>{ this.props.children }</Text>
    );
  }
}
