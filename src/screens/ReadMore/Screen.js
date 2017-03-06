/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import ReadMore from './ReadMore';

const comments = [
  { id: 1, body: 'こちらも平生けっしてこんな相当目というものの時に思いたた。何しろ一番で道楽事もおもにそうした混同んうなどをしからかねたにも留学なりんたて、ちょっとには思いでたないた。否に進んたものはもし場合にましてましないで。すでに大森さんを衰弱人少し留学にするだ空虚この言葉あなたか通用がとしてご妨害なかっうないならば、この当時はどっちか態度徳義心にいて、大森さんのものに大牢のやつがまあご赴任と稼ぎてそれ性質を実意味を申しようにまあご意味が至るませたて、けっして近頃所有に降るたけれどもしまうですものであるうで。' },
  { id: 2, body: 'けれどもそこでご人へ知れのもそういやとしうが、この血をはなるだてに対して耳を出ている。' },
  { id: 3, body: 'そのため鷹狩のためその厭世も私末が考えますかと大森君にしでしです、農家の事実ございというご学習ですたたが、釣竿の上に念に今度かもの職業に途中すまていので、少しのほかが来て同じためについにありたたと云っますのたが、騒々しくでないて実際ご必竟這入りですものんあるない。' },
];

export default class ReadMoreScreen extends Component {
  renderRows() {
    return comments.map((comment) => {
      return (
        <View key={comment.id} style={styles.commentView}>
          <ReadMore comment={comment} />
        </View>
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderRows() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF5D3',
  },
  commentView: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
});
