/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
} from 'react-native';
import {
  ListItem,
  StyleProvider,
  getTheme,
} from 'native-base';
import { Actions } from 'react-native-router-flux';

import material from '../native-base-theme/variables/material';

const contents = [
  { title: 'フェードするローディング', onPress: () => Actions.fadeLoading() },
  { title: 'グラデーションサンプル', onPress: () => Actions.linearGradientExample() },
  { title: 'スワイプでめくれるカード', onPress: () => Actions.swipeCardExample() },
];

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(contents),
    };
  }

  renderRow(props) {
    return (
      <ListItem onPress={props.onPress}>
        <Text>{props.title}</Text>
      </ListItem>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StyleProvider style={getTheme(material)}>
          <ListView
            enableEmptySections
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this.renderRow(rowData)}
            />
        </StyleProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
