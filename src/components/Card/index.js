import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card as NBCard, CardItem as NBCardItem, Text, Body } from 'native-base';


function CardItem(props) {
  return (
    <NBCardItem {...props} style={styles.cardItem}>
      {props.children}
    </NBCardItem>
  )
}

function CardHeader(props) {
  return (
    <CardItem style={styles.cardHeader} header={true} >
      <Text style={styles.cardHeaderText}>{props.children}</Text>
    </CardItem>
  )
}

function CardInfoLabel(props) {
  return (
    <CardItem>
      <Body>
        <Text style={styles.cardInfoLabel}>{props.children}</Text>
      </Body>
    </CardItem>

  )
}


function CardInfoValue(props) {
  return (
    <CardItem>
      <Body>
        <Text style={styles.cardInfoValue}>{props.children}</Text>
      </Body>
    </CardItem>
  )
}

function Card(props) {
  return (
    <NBCard transparent style={styles.card}>
      {props.children}
    </NBCard>
  );
}

const styles = StyleSheet.create({
  cardItem: {
    // padding: 0
  },
  cardHeader: {
    width: '67%'
  },
  cardHeaderText: {
    fontSize: 25
  }
  ,
  cardInfoLabel: {
    textTransform: 'uppercase',
    color: '#959595',
    fontSize: 12,
  },
  cardInfoValue: {
    fontSize: 25,
    color: '#845BA7',
    paddingTop: 0
  },
  card: {
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    shadowOpacity: .16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    }
  }
})

export default Card = { Card, CardInfoLabel, CardInfoValue, CardHeader };
