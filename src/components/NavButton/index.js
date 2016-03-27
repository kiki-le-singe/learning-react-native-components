import React, { Component, TouchableHighlight, Text } from 'react-native';

export default class NavButton extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}>
        <Text>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}
