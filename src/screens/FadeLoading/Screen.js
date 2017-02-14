/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import FadeLoading from './FadeLoading';

export default class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  onPress() {
    this.setState({ isLoading: true });
    setTimeout(() => this.setState({ isLoading: false }), 5000);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress.bind(this)}>
          <View style={{ backgroundColor: '#ff6600', padding: 40 }}>
            <Text style={{ color: 'white' }}>
              Touch
            </Text>
          </View>
        </TouchableOpacity>
        <FadeLoading show={this.state.isLoading} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
