import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Input from '.';
import CenterView from '../CenterView';
storiesOf('Input', module)
  .addDecorator((getStory) => <CenterView addStyle={{ backgroundColor: '#fff' }}>{getStory()}</CenterView>)
  .add('first', () => (
    <Input
      textContentType='givenName'
      placeholder='First'
    ></Input>
  ))
  .add('last', () => (
    <Input
      textContentType='familyName'
      placeholder='Last'
    ></Input>
  ))