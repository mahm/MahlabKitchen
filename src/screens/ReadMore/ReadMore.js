/* @flow */

import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';

const TRUNCATE_HEIGHT = 33.3;

export default class ReadMore extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      comment: this.props.comment,
      isTruncated: false,
      isMeasured: false,
    };
  }

  measureComment() {
    this.commentText.measure((x, y, width, height) => {
      if (this.state.height < height) {
        this.setState({ height });
        this.setState({ isMeasured: true });
        if (height > TRUNCATE_HEIGHT) {
          this.setState({ isTruncated: true });
        }
        console.log(height);
      }
    });
  }

  render() {
    const {
      comment,
      isTruncated,
      isMeasured,
    } = this.state;

    return (
      <View>
        <Text
          onLayout={this.measureComment.bind(this)}
          style={{ fontSize: 14, lineHeight: 16 }}
          ref={(c) => { this.commentText = c; }}
          numberOfLines={isTruncated && isMeasured ? 2 : 0}
          >
          {comment.body}
        </Text>
        {
          isTruncated &&
          <Text
            style={{ fontSize: 10, paddingTop: 10 }}
            onPress={() => {
              this.setState({ isTruncated: false });
              console.log('pressed');
            }}
            >
            {'続きを読む'}
          </Text>
        }
        <Text style={{ marginTop: 10 }}>height: {this.state.height}</Text>
      </View>
    );
  }
}
