import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Container, List, Left, Right, Icon, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';


function ListSelectItem() {
  return (
    <ListItem>
      <CheckBox onPress />
      <Body>
        <Text>Daily Stand Up</Text>
      </Body>
    </ListItem>
  )
}

export default function ListSelect(props) {
  return (
    <List>
      <ListItem selected>
        <Left>
          <Text>Simon Mignolet</Text>
        </Left>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
      <ListItem>
        <Left>
          <Text>Nathaniel Clyne</Text>
        </Left>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
      <ListItem>
        <Left>
          <Text>Dejan Lovren</Text>
        </Left>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    </List>
  );
}

const styles = StyleSheet.create({
})
