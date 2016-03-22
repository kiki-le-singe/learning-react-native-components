import React, { Component, StyleSheet, ListView, View, Text } from 'react-native';

import H2 from '../../texts/H2';
import Color from '../../texts/Color';
import Item from '../../Item';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 24
  },
  list: {
    flex: 1,
    flexDirection: 'row'
  },
  listContent: {
    flex: 1,
    flexDirection: 'column'
  },
  row: {
    flex: 1,
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: '#DDDDDD'
  }
});

const API_KEY = '73b19491b83909c7e07016f4bb4644f9:2:60667290';
const QUERY_TYPE = 'hardcover-fiction';
const API_STEM = 'http://api.nytimes.com/svc/books/v3/lists'
const ENDPOINT = `${API_STEM}/${QUERY_TYPE}?response-format=json&api-key=${API_KEY}`;

export default class SimpleListView extends Component {
  constructor() {
    super();

    const list = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = { dataSource: list.cloneWithRows([]) };
  }

  componentDidMount = () => {
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then((rjson) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(rjson.results.books)
        });
      });
  }

  renderHeader = () => {
    return (
      <View>
        <Text>Bestsellers in Hardcover fiction</Text>
      </View>
    );
  }

  renderFooter = () => {
    return (
      <View>
        <Text>Data from the New York Times Best Seller list.</Text>
      </View>
    );
  }

  renderRow = (rowData) => {
    const { book_image, title, author } = rowData;

    return (<Item coverURL={book_image} title={title} author={author} />);
  }

  render() {
    return (
      <View style={styles.container}>
        <H2><Color color='green'># ListView Components</Color></H2>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ this.renderRow }
          renderHeader={ this.renderHeader }
          renderFooter={ this.renderFooter }
        />
      </View>
    );
  }
}
