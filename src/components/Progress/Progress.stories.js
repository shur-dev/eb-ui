import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Progress from '.';
import CenterView from '../CenterView';
storiesOf('Progress', module)
  .addDecorator((getStory) => <CenterView addStyle={{ backgroundColor: '#fff' }}>{getStory()}</CenterView>)
  .add('name', () => (
    <Progress
      label='name'
      amount={1 / 5}
    ></Progress>
  ))
  .add('terms', () => (
    <Progress
      label='terms'
      amount={5 / 5}
    ></Progress>
  ))