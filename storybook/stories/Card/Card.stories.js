import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Card from '.';
import CenterView from '../CenterView';
storiesOf('Card', module)
  .addDecorator((getStory) => <CenterView addStyle={{ backgroundColor: '#845BA7' }}>{getStory()}</CenterView>)
  .add('with data', () => (
    <Card.Card>
      <Card.CardInfoLabel>Next payment</Card.CardInfoLabel>
      <Card.CardInfoValue>12/08/20</Card.CardInfoValue>
    </Card.Card>
  ))
  .add('with heading', () => (
    <Card.Card>
      <Card.CardHeader>Select a device to pair</Card.CardHeader>
    </Card.Card>
  ))