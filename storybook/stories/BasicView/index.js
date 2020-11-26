import React from 'react';
import { StyleProvider, Container } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material.js';

export default function BasicView({ children }) {
  return <StyleProvider style={getTheme(material)}><Container>{children}</Container></StyleProvider>;
}

