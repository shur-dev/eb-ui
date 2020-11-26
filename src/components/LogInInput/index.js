import React, { Children, Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import { connectStyle } from 'native-base';


//TODO increase space between label and border
export default function LogInInput(props) {
  var { children, ...props } = props
  return (
    <Item floatingLabel>
      <Label style={{ opacity: 1 }}>
        {children}
      </Label>
      <Input {...props}
        autoCapitalize='none'
        style={{ color: '#fff' }} />
    </Item>
  );
}