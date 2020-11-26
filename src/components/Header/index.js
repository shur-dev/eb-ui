import React from 'react';
import { Image } from 'react-native'
import { StyleProvider, Header as CustomHeader, Left, Button, Body, Title, Icon, Right } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material.js';

//TODO replace chevron with more accurate one
//TODO propogate event from back button
//TODO figure out horizontal padding

export default function Header(props) {
    return (
        <CustomHeader noShadow {...props}>
            <Left>
                {props.back &&
                    <Button transparent>
                        <Icon name='ios-arrow-back' />
                    </Button>
                }
            </Left>
            <Body>
            </Body>
            <Right>
                {props.logoSource &&
                    <Image source={props.logoSource} style={{ width: 78, height: 29 }} />
                }
            </Right>
        </CustomHeader>
    );
}
