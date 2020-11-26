import React from 'react';
import { StyleProvider } from 'native-base';
import Button from '.';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material.js';


export default function (props) {
    <StyleProvider style={getTheme(material)}>{props.children}</StyleProvider>
}
