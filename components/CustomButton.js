import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default function CustomButton(props) {
    return(
    <TouchableOpacity 
    onPress={props.action}
    style={ {
        backgroundColor: props.color,
        width: 170,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
      }}>
        <Text style={{ fontSize: 18, color: 'white' }}>{props.text}</Text>
    </TouchableOpacity>
    );
}