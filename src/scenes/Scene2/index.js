import React, {
  Component,
  Text,
  View,
} from 'react-native';

import NavMenu from '../../components/NavMenu';

export default class Scene2 extends Component {
  render() {
    return (
      <View>
        <NavMenu {...this.props} />
        <Text>Scene 2</Text>
      </View>
    );
  }
}
