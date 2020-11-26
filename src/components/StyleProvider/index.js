import React from 'react';
import { StyleProvider as NBStyleProvider } from 'native-base';
import Button from '.';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material.js';


export default function StyleProvider(props) {
    <NBStyleProvider style={getTheme(material)}>{props.children}</NBStyleProvider>
}
