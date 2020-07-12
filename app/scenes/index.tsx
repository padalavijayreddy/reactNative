import React from 'react';
import {Scene} from 'react-native-router-flux';

import {
  APP_LAUNCH_SCENE,
  APP_SCENE,
  APP_COMEDY_SCENE,
} from '../constants/NavigationConstants';

import LaunchScene from './LaunchScene';
import AppScene from './AppScene';
import ComedyScene from './ComedyScene';

const scenes = [
  <Scene key={APP_COMEDY_SCENE} component={ComedyScene} />,
  <Scene key={APP_LAUNCH_SCENE} component={LaunchScene} />,
  <Scene initial key={APP_SCENE} component={AppScene} />,
];

const modalScenes: any = [];

export {scenes as default, modalScenes};
