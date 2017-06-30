import React, { Component } from 'react'
import { View, Image } from 'react-native'

export default class Logo extends Component {
    render() {
        return (
            <View>
                <Image source={ require('./../assets/sleepy-follow-logo.png') } />
            </View>
        );
    }
}
