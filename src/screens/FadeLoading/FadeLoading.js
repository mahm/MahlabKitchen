/* @flow */

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class FadeLoading extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show,
      fadeAnim: new Animated.Value(0),
    };
  }

  componentWillReceiveProps(props) {
    if (props.show) {
      this.setState({ show: props.show });
      Animated.timing(this.state.fadeAnim, { toValue: 1, duration: 2000 }).start();
    } else {
      Animated.timing(this.state.fadeAnim, { toValue: 0, duration: 1000 }).start(event => {
        if (event.finished) { this.setState({ show: false }); }
      });
    }
  }

  render() {
    if (!this.state.show) { return null; }
    const animatedViewStyle = StyleSheet.flatten([
      styles.container,
      { opacity: this.state.fadeAnim },
    ]);
    console.log(this.state.fadeAnim);
    return (
      <Animated.View style={animatedViewStyle} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: 'rgba(52,52,52,0.7)',
  },
});
