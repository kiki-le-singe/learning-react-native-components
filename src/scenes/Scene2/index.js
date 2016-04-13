import React, {
  StyleSheet,
  Component,
  Text,
  View,
} from 'react-native';

export default class Scene2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Scene 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
  },
});
