import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Text, Icon, CheckBox } from 'native-base'


export default function Disclaimer(props) {
  return (
    <ScrollView style={[styles.box, { maxHeight: props.maxHeight }]} {...props}>
      <Text style={styles.text}>
        {props.children}

      </Text>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    width: '100%',
    borderColor: '#000',
    paddingHorizontal: 10,
    paddingTop: 10
  },
  text: {
    fontSize: 12,
    lineHeight: 14.4,
    paddingBottom: 20
  }
})
