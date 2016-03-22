import React, { PropTypes, Component, StyleSheet, Image, View, Text } from 'react-native';

const styles = StyleSheet.create({
  bookItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 2,
    padding: 5
  },
  cover: {
    flex: 1,
    width: 75,
    height: 150,
    resizeMode: 'contain'
  },
  info: {
    flex: 3,
    alignItems: 'flex-end',
    flexDirection: 'column',
    alignSelf: 'center',
    padding: 20
  },
  author: {
    fontSize: 18
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default class ItemListView extends Component {
  static propTypes = {
    coverURL: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    const { coverURL, author, title } = this.props;

    return (
      <View style={ styles.bookItem }>
        <Image style={ styles.cover } source={{uri: coverURL}} />
        <View style={ styles.info }>
          <Text style={ styles.author }>{ author }</Text>
          <Text style={ styles.title }>{ title }</Text>
        </View>
      </View>
    );
  }
}
