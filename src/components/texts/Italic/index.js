import React, { Component, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  italic: {
    fontStyle: 'italic'
  },
});

export default class Italic extends Component {
  render() {
    return (
      <Text style={styles.italic}>{ this.props.children }</Text>
    );
  }
}
