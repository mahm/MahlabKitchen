/* @flow */

import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  LayoutAnimation,
} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const cardWidth = deviceWidth * 0.8;
const startOffset = deviceWidth * 0.1;
const cardMargin = deviceWidth * 0.05;

// Card Data
const range = Array.from(Array(10).keys());
const cards = range.map((i) => { return({ index: i, body: `Card ${i}` }); });

export default class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      offsetX: 0,
    };
  }

  onMomentumScrollBegin(e) {
    const isDirectionRight = e.nativeEvent.contentOffset.x > this.state.offsetX;
    let newIndex = this.state.index;
    if (isDirectionRight && !this.isLastCard) { newIndex = this.state.index + 1; }
    if (!isDirectionRight && !this.isFirstCard) { newIndex = this.state.index - 1; }
    const newOffsetX = newIndex * (cardWidth + cardMargin);
    this.setState({ index: newIndex, offsetX: newOffsetX });
    this.scrollView.scrollTo({ x: newOffsetX });
  }

  get isFirstCard() {
    return this.state.index === 0;
  }

  get isLastCard() {
    return this.state.index === cards.length - 1;
  }

  renderCards() {
    LayoutAnimation.spring();
    return cards.map((card) => {
      const cardStyle = card.index === this.state.index ? styles.currentCard : styles.card;
      return (
        <View key={card.index} style={cardStyle}>
          <Text>{card.body}</Text>
        </View>
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.cards}
          ref={(c) => { this.scrollView = c; }}
          onMomentumScrollBegin={this.onMomentumScrollBegin.bind(this)}
          scrollEventThrottle={16}
          horizontal
          directionalLockEnabled
          pagingEnabled
          >
          <View style={styles.cardStart} />
          {this.renderCards()}
          <View style={styles.cardEnd} />
        </ScrollView>
        <View style={{ flex: 2, padding: 20 }}>
          <Text>左右にスワイプするとカードをたぐることができます</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B1D5D1',
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentCard: {
    marginTop: 20,
    marginRight: cardMargin,
    width: cardWidth,
    height: deviceHeight * 0.4,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    marginTop: 20,
    marginRight: cardMargin,
    width: cardWidth,
    height: deviceHeight * 0.35,
    backgroundColor: '#9BADCB',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardStart: {
    width: startOffset,
  },
  cardEnd: {
    width: startOffset,
  },
});
