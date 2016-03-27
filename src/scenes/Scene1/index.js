import React, {
  Component,
  Text,
  View,
} from 'react-native';

import NavMenu from '../../components/NavMenu';

export default class Scene1 extends Component {
  render() {
    return (
      <View>
        <NavMenu {...this.props} />
        <Text>Scene 1</Text>
      </View>
    );
  }
}
