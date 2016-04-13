import React, { StyleSheet, Component, Navigator } from 'react-native';

import Scene1 from '../../scenes/Scene1';
import Scene2 from '../../scenes/Scene2';
import Scene3 from '../../scenes/Scene3';
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import NavigationBarTitle from './NavigationBarTitle';

const NavigationBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) => {
    // console.log('LeftButton');
    // console.log(route);
    // console.log(navigator);
    // console.log(index);
    // console.log(navState);
    // console.log('LeftButton');

    if (index === 0) {
      return null;
    }

    // const previousRoute = navState.routeStack[index - 1];
    return (
      <LeftButton
        onBack={() => {
          navigator.pop();
        }}
      />
    );
  },

  RightButton: (route, navigator, index, navState) => {
    const numberScene = index + 2;

    // console.log('RightButton');
    // console.log(route);
    // console.log(navigator);
    // console.log(index);
    // console.log(navState);
    // console.log('RightButton');

    if (index === 2) {
      return null;
    }

    return (
      <RightButton
        onNext={() => {
          navigator.push({ id: `scene${numberScene}` });
        }}
      />
    );
  },

  Title: (route, navigator, index, navState) => {
    return (
      <NavigationBarTitle />
    );
  },
};

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
        navigationBar={
          <Navigator.NavigationBar
            style={ styles.navigationBar }
            routeMapper={ NavigationBarRouteMapper }
          />
        }
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
  navigationBar: {
    backgroundColor: '#5B29C1',
    borderBottomColor: '#48209A',
    borderBottomWidth: 1,
  },
});
