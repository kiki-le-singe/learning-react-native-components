import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TextView from './components/views/TextView';
import TouchableHighlightView from './components/views/TouchableHighlightView';
import SimpleListView from './components/views/SimpleListView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
});

export default class ReactNativeComponents extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextView />
        <TouchableHighlightView />
        <SimpleListView />
      </View>
    );
  }
}
