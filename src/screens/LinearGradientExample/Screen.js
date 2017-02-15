/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const colorVariations = [
  ['#4c669f', '#3b5998', '#192f6a'],
  ['#CBE6F3', '#9ACDE7'],
  ['#A6E39D', '#D1F1CC'],
  ['#FFFBD5', '#FFF7AA'],
];

export default class LinearGradientExampleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  onPress() {
    const nextIndex = this.state.index + 1 > colorVariations.length - 1 ? 0 : this.state.index + 1;
    this.setState({ index: nextIndex });
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPress.bind(this)} style={styles.container}>
        <LinearGradient colors={colorVariations[this.state.index]} style={styles.container} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
