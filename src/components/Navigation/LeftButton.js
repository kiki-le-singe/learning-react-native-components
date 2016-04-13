import React, { StyleSheet, Component, TouchableOpacity, View, Text } from 'react-native';

const { Platform } = React;

export default class LeftButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onBack} style={ styles.container }>
        <View><Text style={ styles.text }>{this.props.text || 'Back'}</Text></View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
  },
  text: {
    color: '#EEE',
    fontSize: 16,
    marginVertical: (Platform.OS === 'ios') ? 10 : 16
  },
});
