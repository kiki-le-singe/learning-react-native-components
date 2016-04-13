import React, { StyleSheet, Component, Text, View } from 'react-native';

const { Platform } = React;

export default class NavigationBarTitle extends Component {
  render() {
    return (
      <View><Text style={styles.title}>Title</Text></View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: (Platform.OS === 'ios') ? 9 : 16
  },
});
