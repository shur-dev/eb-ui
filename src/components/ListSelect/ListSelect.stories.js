import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import ListSelect from '.';
import CenterView from '../CenterView';
storiesOf('ListSelect', module)
  .addDecorator((getStory) => <CenterView addStyle={{ backgroundColor: '#fff' }}>{getStory()}</CenterView>)
  .add('ad industries to ignore', () => (
    <ListSelect
      label='name'
      amount={1 / 5}
    ></ListSelect>
  ))
  .add('account mode', () => (
    <ListSelect
      label='terms'
      amount={5 / 5}
    ></ListSelect>
  ))