import React, { Component, TouchableHighlight, View, Text } from 'react-native';

import NavButton from '../NavButton';

export default class NavMenu extends Component {
  render() {
    return (
      <View>
        <NavButton
          onPress={() => {
            this.props.navigator.push({ id: 'scene1' });
          }}
          text="Scene 1 Button"
        />
        <NavButton
          onPress={() => {
            this.props.navigator.push({ id: 'scene2' });
          }}
          text="Scene 2 Button"
        />
      </View>
    );
  }
}
