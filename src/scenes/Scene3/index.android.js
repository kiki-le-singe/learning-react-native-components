import React, {
  StyleSheet,
  Component,
  Text,
  View,
} from 'react-native';

export default class Scene3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Scene 3 from Android device</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  text: {
    color: 'white',
  },
});
