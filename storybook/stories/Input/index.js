import React, { Children, Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input as NBInput, Icon } from 'native-base';
import { StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import { connectStyle } from 'native-base';


export default function Input(props) {
  var { ...props } = props
  return (
    <Item>
      <NBInput clearButtonMode='while-editing' style={{ paddingLeft: 20, fontFamily: 'Interstate-Regular', color: '#000', opacity: 1, backgroundColor: 'rgba(203, 203, 203, 0.13)' }}  {...props} />
    </Item>

  );
}