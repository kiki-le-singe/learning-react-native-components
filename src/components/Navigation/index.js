import React, { Component, Navigator } from 'react-native';

import Scene1 from '../../scenes/Scene1';
import Scene2 from '../../scenes/Scene2';

export default class Navigation extends Component {
  renderScene(route, navigator) {
    switch (route.id) {
      case 'scene1':
        return <Scene1 navigator={navigator} />;
      case 'scene2':
        return <Scene2 navigator={navigator} />;
      default:
        return <Scene1 navigator={navigator} />;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ message: 'My First Scene', id: 'scene1' }}
        renderScene={ this.renderScene }
      />
    );
  }
}