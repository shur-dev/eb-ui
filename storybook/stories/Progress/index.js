import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Icon, CheckBox } from 'native-base'


export default function Progress(props) {
  return (
    <View style={styles.withIcon}>
      <View style={styles.group}>
        <Text style={styles.label}>{props.label}</Text>
        <View style={styles.container}>
          <View style={[styles.progress, { width: `${props.amount * 100}%` }]}>
          </View>
        </View>
      </View>
      <Icon style={[styles.icon, { color: (props.amount == 1 ? '#845BA7' : '#EBEBEB') }]} name='checkcircle' type="AntDesign" />
    </View>

  );
}

const styles = StyleSheet.create({
  withIcon: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 14,
    marginLeft: 5,
    alignSelf: 'flex-end',
    color: '#EBEBEB'
  },
  label: {
    color: '#845BA7',
    textTransform: 'uppercase',
    fontSize: 12,
    marginBottom: 8,
  },
  group: {
    width: '100%',
    marginBottom: 3
  },
  container: {
    height: 4,
    width: '100%',
    backgroundColor: '#EBEBEB',
  },
  progress: {
    height: 4,
    backgroundColor: '#845BA7',
  }
})
