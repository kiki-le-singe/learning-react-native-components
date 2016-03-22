import React, { Component, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
});

export default class Strong extends Component {
  render() {
    return (
      <Text style={styles.bold}>{ this.props.children }</Text>
    );
  }
}
