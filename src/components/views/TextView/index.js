import React, { Component, StyleSheet, View, Text } from 'react-native';

import Strong from '../../texts/Strong';
import Italic from '../../texts/Italic';
import Color from '../../texts/Color';
import H1 from '../../texts/H1';
import H2 from '../../texts/H2';
import H3 from '../../texts/H3';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
});

export default class TextView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <H2><Color color='green'># Texts Components</Color></H2>
        <H1>H1 title</H1>
        <H2>H2 title</H2>
        <H3>H3 title</H3>
        <Text>This is a simple text</Text>
        <Strong>This text is bold</Strong>
        <Italic>This text is italic</Italic>
        <Color color='blue'>this is a blue text</Color>
        <Text>
          <Strong>er dfg fg</Strong> msdlf kds, <Italic>dzefgdg</Italic>dsf gfg fdg. <Strong><Italic>azadsdf dfg</Italic></Strong> df <Strong><Color color='green'>fvklxj</Color></Strong> ldf.
        </Text>
      </View>
    );
  }
}
