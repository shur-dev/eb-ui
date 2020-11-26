import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import LogInInput from '.';
import CenterView from '../CenterView';
storiesOf('LogIn Input', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('email', () => (
    <LogInInput
      keyboardType='email-address'
      textContentType='emailAddress'
    >Email</LogInInput>
  ))
  .add('password', () => (
    <LogInInput
      textContentType='password'
      secureTextEntry={true}
    >Password</LogInInput>
  ))