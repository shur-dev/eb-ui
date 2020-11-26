import React from 'react';
// import PropTypes from 'prop-types';
// import styled, { ThemeProvider } from 'styled-components/native'
// import { boolean } from '@storybook/addon-knobs';
// import { colors, button, fonts } from "../../variables"


// const StyledButton = styled.TouchableOpacity`
//   background-color: ${props => colors[props.color]};
//   border-color: ${props => { return (props.color == 'light' ? colors.white : colors[props.color]) }}
//   border-width: 1;
//   height: ${button.height};
//   justify-content: center;
//   border-radius: 26;
//   width: 100%;
//   opacity: ${props => { return (props.disabled ? 0.5 : 1) }};
//   `

// const StyledText = styled.Text`
// color: ${props => { return (props.outline ? colors[props.color] : button.defaultTextColor) }};
// letter-spacing: ${button.letterSpacing};
// font-size: ${button.fontSize};
// font-family: ${button.fontFamily};
// text-align: center;
// `

// export default function Button({ onPress, color, children }) {
//   return (
//     <StyledButton onPress={onPress} color={color}><StyledText>{children}</StyledText></StyledButton>
//   );
// }

import { Button as CustomButton, Text as CustomText } from 'native-base';

export default function Button(props) {
  return (
    <CustomButton {...props}><CustomText>{props.children}</CustomText></CustomButton>
  );
}
