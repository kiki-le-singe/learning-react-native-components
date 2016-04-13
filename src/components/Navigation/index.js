import React, { StyleSheet, Component, Navigator } from 'react-native';

import Scene1 from '../../scenes/Scene1';
import Scene2 from '../../scenes/Scene2';
import Scene3 from '../../scenes/Scene3';

export default class Navigation extends Component {
  renderScene(route, navigator) {
    switch (route.id) {
      case 'scene1':
        return <Scene1 navigator={navigator} />;
      case 'scene2':
        return <Scene2 navigator={navigator} />;
      case 'scene3':
        return <Scene3 navigator={navigator} />;
      default:
        return <Scene1 navigator={navigator} />;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ message: 'My First Scene', id: 'scene1' }}
        style={ styles.navigator }
        sceneStyle={ styles.scene }
        renderScene={ this.renderScene }
      />
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  scene: {
    padding: 5,
  },
});
