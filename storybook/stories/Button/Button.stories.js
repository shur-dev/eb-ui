import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import { StyleProvider } from 'native-base';
import Button from '.';
import CenterView from '../CenterView';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material.js';


storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView><StyleProvider style={getTheme(material)}>{getStory()}</StyleProvider></CenterView>)
  .add('primary', () => (
    <Button primary block>I'M A DRIVER</Button>
  ))
  .add('info', () => (
    <Button info block>I'M A PEDESTRIAN</Button>
  ))
  .add('dark', () => (
    <Button dark block>SIGN IN</Button>
  ))
  .add('light', () => (
    <Button light bordered block>REGISTER</Button>
  ))
  .add('danger', () => (
    <Button danger block>END DRIVING</Button>
  ))
