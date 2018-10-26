/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import VoiceToText from './src/components/VoiceToText';
import HomeScreenUi from './src/components/HomeScreenUi';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <HomeScreenUi/>
    );
  }
}