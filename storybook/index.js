// if you use expo remove this line
import { AppRegistry } from 'react-native';

import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import './rn-addons';

import { Asset } from "expo-asset";
import * as Font from "expo-font";

const loadAllAssests = [
  Asset.loadAsync([require("../assets/logo.png")]),
  Font.loadAsync({
    //   ...Icon.Ionicons.font, // This is the font that we are using for our tab bar
    "Interstate-Regular": require("../assets/fonts/Interstate-Regular.ttf"),
    //   bold: require('../assets/fonts/CircularStd-Bold.ttf'),
  }),
];

Promise.all(loadAllAssests).then(() => {
  console.log('loadResourcesAsync done');
});

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
// AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
