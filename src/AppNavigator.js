import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import FadeLoadingScreen from './screens/FadeLoading/Screen';
import LinearGradientExampleScreen from './screens/LinearGradientExample/Screen';

const RouterWithRedux = connect()(Router);

const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

export default class AppNavigator extends Component {
  render() {
    return (
      <RouterWithRedux getSceneStyle={getSceneStyle}>
        <Scene key="root" hideTabBar>
          <Scene initial key="home" title="ホーム" component={HomeScreen} />
          <Scene key="fadeLoading" title="フェードするローディング" component={FadeLoadingScreen} />
          <Scene key="linearGradientExample" title="グラデーション" component={LinearGradientExampleScreen} />
        </Scene>
      </RouterWithRedux>
    );
  }
}
