import React, {
  StyleSheet,
  Component,
  Text,
  View,
} from 'react-native';

export default class Scene1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Scene 1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
  },
});
