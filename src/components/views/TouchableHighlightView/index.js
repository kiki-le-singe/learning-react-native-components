import React, { Component, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import H2 from '../../texts/H2';
import Color from '../../texts/Color';

export default class TouchableHighlightView extends Component {
  constructor() {
    super();

    this.state = { pressing: false };
  }

  handlePressIn = () => {
    console.log('handlePressIn');
    this.setState({ pressing: true });
  }

  handlePressOut = () => {
    console.log('handlePressOut');
    this.setState({ pressing: false });
  }

  handleLongPress = () => {
    console.log('handleLongPress');
  }

  render() {
    const { pressing } = this.state;
    const text = pressing ? 'Pressed!' : 'Press me!';
    const backgroundColorButton = pressing ? 'red' : 'blue';
    const styles = StyleSheet.create({
      container: {
        marginTop: 35,
        alignItems: 'center',
      },
      touchable: {
        marginTop: 25,
        borderRadius: 100,
      },
      text: {
        textAlign: 'center',
        color: 'white',
      },
      button: {
        backgroundColor: backgroundColorButton,
        borderRadius: 100,
        height: 200,
        width: 200,
        justifyContent: 'center',
      },
    });

    return (
      <View style={ styles.container }>
        <H2><Color color='green'># TouchableHighlight Component</Color></H2>
        <TouchableHighlight
          style={ styles.touchable }
          onPressIn={ this.handlePressIn }
          onPressOut={ this.handlePressOut }
          onLongPress={ this.handleLongPress }
        >
          <View style={ styles.button }>
            <Text style={ styles.text }>{ text }</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
