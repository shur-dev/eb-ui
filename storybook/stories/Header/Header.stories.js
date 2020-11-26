import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Header from '.';
import { Container } from 'native-base';
import BasicView from '../CenterView';
import { StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material.js';


storiesOf('Header', module)
  .addDecorator((getStory) => (<StyleProvider style={getTheme(material)}><Container>{getStory()}</Container></StyleProvider>))
  .add('blank', () => (
    <Header />
  ))
  .add('back btn', () => (
    <Header back={true} />
  ))
  .add('logo', () => (
    <Header logoSource={require('./logo.png')} />
  ))
  .add('back btn + logo', () => (
    <Header back={true} logoSource={require('./logo.png')} />
  ));