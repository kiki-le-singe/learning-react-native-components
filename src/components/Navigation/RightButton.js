import React, { StyleSheet, Component, TouchableOpacity, View, Text } from 'react-native';

const { Platform } = React;

export default class RightButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onNext} style={ styles.container }>
        <View><Text style={ styles.text }>{this.props.text || 'Next'}</Text></View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
  },
  text: {
    color: '#EEE',
    fontSize: 16,
    marginVertical: (Platform.OS === 'ios') ? 10 : 16
  },
});
