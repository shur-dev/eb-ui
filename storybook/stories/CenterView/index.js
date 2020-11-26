import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import style from './style';
import { StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material.js';

export default function CenterView({ addStyle, children }) {
  return <StyleProvider style={getTheme(material)}><View style={[style.main, addStyle]}>{children}</View></StyleProvider>;
}

